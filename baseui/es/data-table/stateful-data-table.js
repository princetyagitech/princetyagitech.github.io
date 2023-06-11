/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Button, SHAPE as BUTTON_SHAPES, SIZE as BUTTON_SIZES, KIND as BUTTON_KINDS } from '../button/index.js';
import Search from '../icon/search.js';
import { Input, SIZE as INPUT_SIZES } from '../input/index.js';
import { Popover } from '../popover/index.js';
import { useStyletron } from '../styles/index.js';
import { Tag } from '../tag/index.js';
import FilterMenu from './filter-menu.js';
import { Unstable_DataTable } from './data-table.js';
import { Unstable_StatefulContainer } from './stateful-container.js';

function useResizeObserver(ref, callback) {
  React.useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      if (ref.current) {
        //$FlowFixMe
        const observer = new ResizeObserver(callback);
        observer.observe(ref.current);
        return () => observer.disconnect();
      }
    }
  }, [ref]);
}

function QueryInput(props) {
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    const timeout = setTimeout(() => props.onChange(value), 250);
    return () => clearTimeout(timeout);
  }, [value]);
  return React.createElement("div", {
    className: css({
      width: '375px',
      marginBottom: theme.sizing.scale500
    })
  }, React.createElement(Input, {
    "aria-label": "Search by text",
    overrides: {
      Before: function Before() {
        return React.createElement("div", {
          className: css({
            alignItems: 'center',
            display: 'flex',
            paddingLeft: theme.sizing.scale500
          })
        }, React.createElement(Search, {
          size: "18px"
        }));
      }
    },
    size: INPUT_SIZES.compact,
    onChange: event => setValue(event.target.value),
    value: value,
    clearable: true
  }));
}

function FilterTag(props) {
  const [css, theme] = useStyletron();
  const [isOpen, setIsOpen] = React.useState(false);
  const columnIndex = props.columns.findIndex(c => c.title === props.title);
  const column = props.columns[columnIndex];

  if (!column) {
    return null;
  }

  const data = props.rows.map(r => column.mapDataToValue(r.data));
  const Filter = column.renderFilter;
  return React.createElement(Popover, {
    focusLock: true,
    returnFocus: true,
    key: props.title,
    isOpen: isOpen,
    onClickOutside: () => setIsOpen(false),
    content: () => React.createElement(Filter, {
      close: () => setIsOpen(false),
      data: data,
      filterParams: props.filter,
      setFilter: filterParams => props.onFilterAdd(props.title, filterParams)
    })
  }, React.createElement("div", null, React.createElement(Tag, {
    onClick: () => setIsOpen(!isOpen),
    onActionClick: () => props.onFilterRemove(props.title),
    overrides: {
      Root: {
        style: {
          borderTopLeftRadius: '36px',
          borderTopRightRadius: '36px',
          borderBottomLeftRadius: '36px',
          borderBottomRightRadius: '36px',
          height: '36px',
          marginTop: null,
          marginBottom: theme.sizing.scale500
        }
      },
      Action: {
        style: {
          borderTopRightRadius: '36px',
          borderBottomRightRadius: '36px',
          height: '22px'
        }
      }
    }
  }, React.createElement("span", {
    className: css({ ...theme.typography.font150,
      color: theme.colors.contentPrimary
    })
  }, props.title), ": ", props.filter.description)));
}

export function Unstable_StatefulDataTable(props) {
  const [css, theme] = useStyletron();
  const headlineRef = React.useRef(null);
  const [headlineHeight, setHeadlineHeight] = React.useState(64);
  useResizeObserver(headlineRef, entries => {
    setHeadlineHeight(entries[0].contentRect.height);
  });
  const filterable = props.filterable === undefined ? true : props.filterable;
  const searchable = props.searchable === undefined ? true : props.searchable;
  return React.createElement(Unstable_StatefulContainer, {
    batchActions: props.batchActions,
    columns: props.columns,
    initialFilters: props.initialFilters,
    initialSelectedRowIds: props.initialSelectedRowIds,
    onFilterAdd: props.onFilterAdd,
    onFilterRemove: props.onFilterRemove,
    onRowHighlightChange: props.onRowHighlightChange,
    onSelectionChange: props.onSelectionChange,
    rows: props.rows,
    rowActions: props.rowActions,
    rowHighlightIndex: props.rowHighlightIndex
  }, ({
    filters,
    onFilterAdd,
    onFilterRemove,
    onRowHighlightChange,
    onSelectMany,
    onSelectNone,
    onSelectOne,
    onSort,
    onTextQueryChange,
    rowHighlightIndex,
    selectedRowIds,
    sortIndex,
    sortDirection,
    textQuery
  }) => React.createElement(React.Fragment, null, React.createElement("div", {
    className: css({
      height: `${headlineHeight}px`
    })
  }, React.createElement("div", {
    ref: headlineRef
  }, !selectedRowIds.size && React.createElement("div", {
    className: css({
      alignItems: 'end',
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: theme.sizing.scale500
    })
  }, searchable && React.createElement(QueryInput, {
    onChange: onTextQueryChange
  }), filterable && React.createElement(React.Fragment, null, React.createElement(FilterMenu, {
    columns: props.columns,
    filters: filters,
    rows: props.rows,
    onSetFilter: onFilterAdd
  }), Array.from(filters).map(([title, filter]) => React.createElement(FilterTag, {
    key: title,
    columns: props.columns,
    filter: filter,
    onFilterAdd: onFilterAdd,
    onFilterRemove: onFilterRemove,
    rows: props.rows,
    title: title
  })))), Boolean(selectedRowIds.size) && props.batchActions && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.sizing.scale400,
      paddingBottom: theme.sizing.scale400
    }
  }, props.batchActions.map(action => {
    function onClick(event) {
      action.onClick({
        clearSelection: onSelectNone,
        event,
        selection: props.rows.filter(r => selectedRowIds.has(r.id))
      });
    }

    if (action.renderIcon) {
      const Icon = action.renderIcon;
      return React.createElement(Button, {
        key: action.label,
        overrides: {
          BaseButton: {
            props: {
              'aria-label': action.label
            }
          }
        },
        onClick: onClick,
        kind: BUTTON_KINDS.tertiary,
        shape: BUTTON_SHAPES.round
      }, React.createElement(Icon, {
        size: 16
      }));
    }

    return React.createElement(Button, {
      key: action.label,
      onClick: onClick,
      kind: BUTTON_KINDS.secondary,
      size: BUTTON_SIZES.compact
    }, action.label);
  })))), React.createElement("div", {
    style: {
      width: '100%',
      height: `calc(100% - ${headlineHeight}px)`
    }
  }, React.createElement(Unstable_DataTable, {
    batchActions: props.batchActions,
    columns: props.columns,
    emptyMessage: props.emptyMessage,
    filters: filters,
    loading: props.loading,
    loadingMessage: props.loadingMessage,
    onRowHighlightChange: onRowHighlightChange,
    onSelectionChange: props.onSelectionChange,
    onSelectMany: onSelectMany,
    onSelectNone: onSelectNone,
    onSelectOne: onSelectOne,
    onSort: onSort,
    rowHighlightIndex: rowHighlightIndex,
    rows: props.rows,
    rowActions: props.rowActions,
    rowHeight: props.rowHeight,
    selectedRowIds: selectedRowIds,
    sortDirection: sortDirection,
    sortIndex: sortIndex,
    textQuery: textQuery
  }))));
}