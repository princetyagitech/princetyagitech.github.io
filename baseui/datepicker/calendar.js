"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../form-control/index.js");

var _index2 = require("../locale/index.js");

var _index3 = require("../select/index.js");

var _calendarHeader = _interopRequireDefault(require("./calendar-header.js"));

var _month = _interopRequireDefault(require("./month.js"));

var _timepicker = _interopRequireDefault(require("../timepicker/timepicker.js"));

var _styledComponents = require("./styled-components.js");

var _index4 = require("./utils/index.js");

var _overrides = require("../helpers/overrides.js");

var _constants = require("./constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "calendar", void 0);

    _defineProperty(_assertThisInitialized(_this), "getDateInView", function () {
      var _this$props = _this.props,
          highlightedDate = _this$props.highlightedDate,
          value = _this$props.value;
      var minDate = (0, _index4.getEffectiveMinDate)(_this.props);
      var maxDate = (0, _index4.getEffectiveMaxDate)(_this.props);
      var current = new Date();
      var initialDate = _this.getSingleDate(value) || highlightedDate;

      if (initialDate) {
        return initialDate;
      } else {
        if (minDate && (0, _index4.isBefore)(current, minDate)) {
          return minDate;
        } else if (maxDate && (0, _index4.isAfter)(current, maxDate)) {
          return maxDate;
        }
      }

      return current;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMonthChange", function (date) {
      _this.setHighlightedDate((0, _index4.getStartOfMonth)(date));

      if (_this.props.onMonthChange) {
        _this.props.onMonthChange({
          date: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleYearChange", function (date) {
      _this.setHighlightedDate(date);

      if (_this.props.onYearChange) {
        _this.props.onYearChange({
          date: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeMonth", function (_ref) {
      var date = _ref.date;

      _this.setState({
        date: date
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeYear", function (_ref2) {
      var date = _ref2.date;

      _this.setState({
        date: date
      }, function () {
        return _this.handleYearChange(_this.state.date);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendarHeader", function () {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;
      var order = arguments.length > 1 ? arguments[1] : undefined;
      return React.createElement(_calendarHeader.default, _extends({}, _this.props, {
        key: "month-header-".concat(order),
        date: date,
        order: order,
        onMonthChange: _this.changeMonth,
        onYearChange: _this.changeYear
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Home':
        case 'End':
        case 'PageUp':
        case 'PageDown':
          _this.handleArrowKey(event.key);

          event.preventDefault();
          event.stopPropagation();
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowKey", function (key) {
      var oldDate = _this.state.highlightedDate;
      var highlightedDate = oldDate;

      switch (key) {
        case 'ArrowLeft':
          // adding `new Date()` as the last option to satisfy Flow
          highlightedDate = (0, _index4.subDays)(highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'ArrowRight':
          highlightedDate = (0, _index4.addDays)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'ArrowUp':
          highlightedDate = (0, _index4.subWeeks)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'ArrowDown':
          highlightedDate = (0, _index4.addWeeks)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'Home':
          highlightedDate = (0, _index4.getStartOfWeek)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date());
          break;

        case 'End':
          highlightedDate = (0, _index4.getEndOfWeek)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date());
          break;

        case 'PageUp':
          highlightedDate = (0, _index4.subMonths)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'PageDown':
          highlightedDate = (0, _index4.addMonths)( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;
      }

      _this.setState({
        highlightedDate: highlightedDate,
        date: highlightedDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "focusCalendar", function () {
      if (!_this.state.focused) {
        _this.setState({
          focused: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "blurCalendar", function () {
      if (typeof document !== 'undefined') {
        var activeElm = document.activeElement;

        if (_this.calendar && !_this.calendar.contains(activeElm)) {
          _this.setState({
            focused: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabbing", function (event) {
      if (typeof document !== 'undefined') {
        if (event.keyCode === 9) {
          var activeElm = document.activeElement; // need to look for any tabindex >= 0 and ideally for not disabled
          // focusable by default elements like input, button, etc.

          var focusable = _this.state.rootElement ? _this.state.rootElement.querySelectorAll('[tabindex="0"]') : null;
          var length = focusable ? focusable.length : 0;

          if (event.shiftKey) {
            if (focusable && activeElm === focusable[0]) {
              event.preventDefault();
              focusable[length - 1].focus();
            }
          } else {
            if (focusable && activeElm === focusable[length - 1]) {
              event.preventDefault();
              focusable[0].focus();
            }
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDayFocus", function (data) {
      var date = data.date;

      _this.setState({
        highlightedDate: date
      });

      _this.focusCalendar();

      _this.props.onDayFocus && _this.props.onDayFocus(data);
    });

    _defineProperty(_assertThisInitialized(_this), "onDayMouseOver", function (data) {
      var date = data.date;

      _this.setState({
        highlightedDate: date
      });

      _this.props.onDayMouseOver && _this.props.onDayMouseOver(data);
    });

    _defineProperty(_assertThisInitialized(_this), "onDayMouseLeave", function (data) {
      var date = data.date;

      _this.setHighlightedDate(date);

      _this.props.onDayMouseLeave && _this.props.onDayMouseLeave(data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateChange", function (data) {
      var _this$props$onChange = _this.props.onChange,
          onChange = _this$props$onChange === void 0 ? function (params) {} : _this$props$onChange;

      if (Array.isArray(data.date)) {
        var dates = data.date.map(function (date, index) {
          var values = [].concat(_this.props.value);
          return (0, _index4.applyDateToTime)(values[index], date);
        });
        onChange({
          date: dates
        });
      } else if (!Array.isArray(_this.props.value) && data.date) {
        var nextDate = (0, _index4.applyDateToTime)(_this.props.value, data.date);
        onChange({
          date: nextDate
        });
      } else {
        onChange({
          date: data.date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimeChange", function (time, index) {
      var _this$props$onChange2 = _this.props.onChange,
          onChange = _this$props$onChange2 === void 0 ? function (params) {} : _this$props$onChange2;

      if (Array.isArray(_this.props.value)) {
        var dates = _this.props.value.map(function (date, i) {
          if (index === i) {
            return (0, _index4.applyTimeToDate)(date, time);
          }

          return date;
        });

        onChange({
          date: dates
        });
      } else {
        var date = (0, _index4.applyTimeToDate)(_this.props.value, time);
        onChange({
          date: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonths", function (translations) {
      var _this$props$overrides = _this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;
      var monthList = [];

      var _getOverrides = (0, _overrides.getOverrides)(overrides.CalendarContainer, _styledComponents.StyledCalendarContainer),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          CalendarContainer = _getOverrides2[0],
          calendarContainerProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.MonthContainer, _styledComponents.StyledMonthContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          MonthContainer = _getOverrides4[0],
          monthContainerProps = _getOverrides4[1];

      for (var i = 0; i < (_this.props.monthsShown || 1); ++i) {
        var monthSubComponents = [];
        var monthDate = (0, _index4.addMonths)(_this.state.date, i);
        var monthKey = "month-".concat(i);
        monthSubComponents.push(_this.renderCalendarHeader(monthDate, i));
        monthSubComponents.push(React.createElement(CalendarContainer, _extends({
          key: monthKey,
          ref: function ref(calendar) {
            _this.calendar = calendar;
          },
          role: "grid",
          "aria-roledescription": translations.ariaRoleDescCalMonth,
          "aria-multiselectable": _this.props.range || null,
          onKeyDown: _this.onKeyDown
        }, calendarContainerProps), React.createElement(_month.default, {
          date: monthDate,
          excludeDates: _this.props.excludeDates,
          filterDate: _this.props.filterDate,
          highlightedDate: _this.state.highlightedDate,
          includeDates: _this.props.includeDates,
          focusedCalendar: _this.state.focused,
          range: _this.props.range,
          locale: _this.props.locale,
          maxDate: _this.props.maxDate,
          minDate: _this.props.minDate,
          month: (0, _index4.getMonth)(_this.state.date),
          onDayBlur: _this.blurCalendar,
          onDayFocus: _this.onDayFocus,
          onDayClick: _this.props.onDayClick,
          onDayMouseOver: _this.onDayMouseOver,
          onDayMouseLeave: _this.onDayMouseLeave,
          onChange: _this.handleDateChange,
          overrides: overrides,
          value: _this.props.value,
          peekNextMonth: _this.props.peekNextMonth
        })));
        monthList.push(React.createElement("div", {
          key: "month-component-".concat(i)
        }, monthSubComponents));
      }

      return React.createElement(MonthContainer, monthContainerProps, monthList);
    });

    _defineProperty(_assertThisInitialized(_this), "renderTimeSelect", function (value, onChange, label) {
      var _this$props$overrides2 = _this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;

      var _getOverrides5 = (0, _overrides.getOverrides)(overrides.TimeSelectContainer, _styledComponents.StyledSelectorContainer),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          TimeSelectContainer = _getOverrides6[0],
          timeSelectContainerProps = _getOverrides6[1];

      var _getOverrides7 = (0, _overrides.getOverrides)(overrides.TimeSelectFormControl, _index.FormControl),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          TimeSelectFormControl = _getOverrides8[0],
          timeSelectFormControlProps = _getOverrides8[1];

      var _getOverrides9 = (0, _overrides.getOverrides)(overrides.TimeSelect, _timepicker.default),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          TimeSelect = _getOverrides10[0],
          timeSelectProps = _getOverrides10[1];

      return React.createElement(TimeSelectContainer, timeSelectContainerProps, React.createElement(TimeSelectFormControl, _extends({
        label: label
      }, timeSelectFormControlProps), React.createElement(TimeSelect, _extends({
        value: value ? new Date(value) : value,
        onChange: onChange
      }, timeSelectProps))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderQuickSelect", function () {
      var _this$props$overrides3 = _this.props.overrides,
          overrides = _this$props$overrides3 === void 0 ? {} : _this$props$overrides3;

      var _getOverrides11 = (0, _overrides.getOverrides)(overrides.QuickSelectContainer, _styledComponents.StyledSelectorContainer),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          QuickSelectContainer = _getOverrides12[0],
          quickSelectContainerProps = _getOverrides12[1];

      var _getOverrides13 = (0, _overrides.getOverrides)(overrides.QuickSelectFormControl, _index.FormControl),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          QuickSelectFormControl = _getOverrides14[0],
          quickSelectFormControlProps = _getOverrides14[1];

      var _getOverrides15 = (0, _overrides.getOverrides)( //
      overrides.QuickSelect, _index3.Select),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          QuickSelect = _getOverrides16[0],
          _getOverrides16$ = _getOverrides16[1],
          quickSelectOverrides = _getOverrides16$.overrides,
          restQuickSelectProps = _objectWithoutProperties(_getOverrides16$, ["overrides"]);

      if (!_this.props.quickSelect) {
        return null;
      }

      var NOW = new Date();
      NOW.setHours(12, 0, 0);
      return React.createElement(_index2.LocaleContext.Consumer, null, function (locale) {
        return React.createElement(QuickSelectContainer, quickSelectContainerProps, React.createElement(QuickSelectFormControl, _extends({
          label: locale.datepicker.quickSelectLabel
        }, quickSelectFormControlProps), React.createElement(QuickSelect, _extends({
          "aria-label": locale.datepicker.quickSelectAriaLabel,
          labelKey: "id",
          onChange: function onChange(params) {
            if (!params.option) {
              _this.setState({
                quickSelectId: null
              });

              _this.props.onChange && _this.props.onChange({
                date: []
              });
            } else {
              _this.setState({
                quickSelectId: params.option.id
              });

              if (_this.props.onChange) {
                if (_this.props.range) {
                  _this.props.onChange({
                    date: [params.option.beginDate, params.option.endDate || NOW]
                  });
                } else {
                  _this.props.onChange({
                    date: params.option.beginDate
                  });
                }
              }
            }
          },
          options: _this.props.quickSelectOptions || [{
            id: locale.datepicker.pastWeek,
            beginDate: (0, _index4.subWeeks)(NOW, 1)
          }, {
            id: locale.datepicker.pastMonth,
            beginDate: (0, _index4.subMonths)(NOW, 1)
          }, {
            id: locale.datepicker.pastThreeMonths,
            beginDate: (0, _index4.subMonths)(NOW, 3)
          }, {
            id: locale.datepicker.pastSixMonths,
            beginDate: (0, _index4.subMonths)(NOW, 6)
          }, {
            id: locale.datepicker.pastYear,
            beginDate: (0, _index4.subYears)(NOW, 1)
          }, {
            id: locale.datepicker.pastTwoYears,
            beginDate: (0, _index4.subYears)(NOW, 2)
          }],
          placeholder: locale.datepicker.quickSelectPlaceholder,
          value: _this.state.quickSelectId && [{
            id: _this.state.quickSelectId
          }],
          overrides: (0, _overrides.mergeOverrides)({
            Dropdown: {
              style: {
                textAlign: 'start'
              }
            }
          }, quickSelectOverrides)
        }, restQuickSelectProps))));
      });
    });

    var dateInView = _this.getDateInView();

    var _this$props2 = _this.props,
        _highlightedDate = _this$props2.highlightedDate,
        _value = _this$props2.value;
    _this.state = {
      highlightedDate: _highlightedDate && (0, _index4.isSameMonth)(dateInView, _highlightedDate) ? _highlightedDate : _this.getSingleDate(_value) || new Date(),
      focused: false,
      date: dateInView,
      quickSelectId: null,
      rootElement: null
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocusCalendar) {
        this.focusCalendar();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.highlightedDate && !(0, _index4.isSameDay)(this.props.highlightedDate, prevProps.highlightedDate)) {
        this.setState({
          date: this.props.highlightedDate
        });
      }

      if (this.props.autoFocusCalendar && this.props.autoFocusCalendar !== prevProps.autoFocusCalendar) {
        this.focusCalendar();
      }

      if (prevProps.value !== this.props.value) {
        var nextDate = this.getDateInView();

        if (!this.isInView(nextDate)) {
          this.setState({
            date: nextDate
          });
        }
      }
    }
  }, {
    key: "isInView",
    value: function isInView(date) {
      // we calculate the month delta between the date arg and the date in the state.
      var currentDate = this.state.date; // First we get the year delta

      var yearDelta = date.getFullYear() - currentDate.getFullYear(); // then we convert it to months. Then we simply add the date-without-year month delta back in.

      var monthDelta = yearDelta * 12 + date.getMonth() - currentDate.getMonth(); // we just check that the delta is between the range given by "this month" (i.e. 0) and "the last month" (i.e. monthsShown)

      return monthDelta >= 0 && monthDelta < (this.props.monthsShown || 1);
    }
  }, {
    key: "getSingleDate",
    value: function getSingleDate(value) {
      // need to check this.props.range but flow would complain
      // at the return value in the else clause
      if (Array.isArray(value)) {
        return value[0] || null;
      }

      return value;
    }
  }, {
    key: "setHighlightedDate",
    value: function setHighlightedDate(date) {
      var value = this.props.value;
      var selected = this.getSingleDate(value);
      var nextState;

      if (selected && (0, _index4.isSameMonth)(selected, date) && (0, _index4.isSameYear)(selected, date)) {
        nextState = {
          highlightedDate: selected
        };
      } else {
        nextState = {
          highlightedDate: date
        };
      }

      this.setState(nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides4 = this.props.overrides,
          overrides = _this$props$overrides4 === void 0 ? {} : _this$props$overrides4;

      var _getOverrides17 = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledRoot),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          Root = _getOverrides18[0],
          rootProps = _getOverrides18[1];

      var _concat = [].concat(this.props.value),
          _concat2 = _slicedToArray(_concat, 2),
          startDate = _concat2[0],
          endDate = _concat2[1];

      return React.createElement(_index2.LocaleContext.Consumer, null, function (locale) {
        return React.createElement(Root, _extends({
          "data-baseweb": "calendar",
          ref: function ref(root) {
            if (root && root instanceof HTMLElement && !_this2.state.rootElement) {
              _this2.setState({
                rootElement: root
              });
            }
          },
          "aria-label": locale.datepicker.ariaLabelCalendar,
          onKeyDown: _this2.props.trapTabbing ? _this2.handleTabbing : null
        }, rootProps), _this2.renderMonths({
          ariaRoleDescCalMonth: locale.datepicker.ariaRoleDescriptionCalendarMonth
        }), _this2.props.timeSelectStart && _this2.renderTimeSelect(startDate, function (time) {
          return _this2.handleTimeChange(time, 0);
        }, locale.datepicker.timeSelectStartLabel), _this2.props.timeSelectEnd && _this2.props.range && _this2.renderTimeSelect(endDate, function (time) {
          return _this2.handleTimeChange(time, 1);
        }, locale.datepicker.timeSelectEndLabel), _this2.renderQuickSelect());
      });
    }
  }]);

  return Calendar;
}(React.Component);

exports.default = Calendar;

_defineProperty(Calendar, "defaultProps", {
  autoFocusCalendar: false,
  excludeDates: null,
  filterDate: null,
  highlightedDate: null,
  includeDates: null,
  range: false,
  locale: null,
  maxDate: null,
  minDate: null,
  onDayClick: function onDayClick() {},
  onDayFocus: function onDayFocus() {},
  onDayMouseOver: function onDayMouseOver() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onChange: function onChange() {},
  orientation: _constants.ORIENTATION.vertical,
  overrides: {},
  peekNextMonth: false,
  value: null,
  trapTabbing: false
});