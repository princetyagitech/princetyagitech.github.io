function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Week from './week.js';
import { StyledMonth } from './styled-components.js';
import { addDays, isSameMonth, getStartOfWeek, getStartOfMonth, getMonth, addWeeks } from './utils/index.js';
import { getOverrides } from '../helpers/overrides.js';
const defaultProps = {
  date: new Date(),
  excludeDates: null,
  filterDate: null,
  highlightDates: null,
  includeDates: null,
  locale: null,
  maxDate: null,
  minDate: null,
  month: null,
  onDayClick: () => {},
  onDayFocus: () => {},
  onDayBlur: () => {},
  onDayMouseOver: () => {},
  onDayMouseLeave: () => {},
  overrides: {},
  peekNextMonth: false,
  value: null
};
export default class CalendarMonth extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isWeekInMonth", startOfWeek => {
      const date = this.props.date;
      const endOfWeek = addDays(startOfWeek, 6);
      return isSameMonth(startOfWeek, date) || isSameMonth(endOfWeek, date);
    });

    _defineProperty(this, "renderWeeks", () => {
      const weeks = [];
      let currentWeekStart = getStartOfWeek(getStartOfMonth(this.props.date), this.props.locale);
      let i = 0;
      let isWithinMonth = true;

      while (isWithinMonth) {
        weeks.push(React.createElement(Week, {
          date: currentWeekStart,
          excludeDates: this.props.excludeDates,
          filterDate: this.props.filterDate,
          highlightedDate: this.props.highlightedDate,
          includeDates: this.props.includeDates,
          focusedCalendar: this.props.focusedCalendar,
          range: this.props.range,
          key: i,
          locale: this.props.locale,
          minDate: this.props.minDate,
          maxDate: this.props.maxDate,
          month: getMonth(this.props.date),
          onDayBlur: this.props.onDayBlur,
          onDayFocus: this.props.onDayFocus,
          onDayClick: this.props.onDayClick,
          onDayMouseOver: this.props.onDayMouseOver,
          onDayMouseLeave: this.props.onDayMouseLeave,
          onChange: this.props.onChange,
          overrides: this.props.overrides,
          peekNextMonth: this.props.peekNextMonth,
          value: this.props.value
        }));
        i++;
        currentWeekStart = addWeeks(currentWeekStart, 1); // It will break on the next week if the week is out of the month

        isWithinMonth = this.isWeekInMonth(currentWeekStart);
      }

      return weeks;
    });
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [Month, monthProps] = getOverrides(overrides.Month, StyledMonth);
    return React.createElement(Month, monthProps, this.renderWeeks());
  }

}

_defineProperty(CalendarMonth, "defaultProps", defaultProps);