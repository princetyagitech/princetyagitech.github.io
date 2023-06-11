function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot, Bar as StyledBar, Label as StyledLabel, BarProgress as StyledBarProgress } from './styled-components.js';

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          getProgressLabel = _this$props.getProgressLabel,
          value = _this$props.value,
          successValue = _this$props.successValue,
          showLabel = _this$props.showLabel,
          infinite = _this$props.infinite,
          errorMessage = _this$props.errorMessage;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.Bar, StyledBar),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Bar = _getOverrides4[0],
          barProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.BarProgress, StyledBarProgress),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          BarProgress = _getOverrides6[0],
          barProgressProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.Label, StyledLabel),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Label = _getOverrides8[0],
          labelProps = _getOverrides8[1];

      var sharedProps = {
        $value: value,
        $successValue: successValue,
        $infinite: infinite
      };
      return React.createElement(Root, _extends({
        "data-baseweb": "progress-bar",
        role: "progressbar",
        "aria-valuenow": infinite ? null : value,
        "aria-valuemin": infinite ? null : 0,
        "aria-valuemax": infinite ? null : 100,
        "aria-invalid": errorMessage ? true : null,
        "aria-errormessage": errorMessage
      }, sharedProps, rootProps), React.createElement(Bar, _extends({}, sharedProps, barProps), React.createElement(BarProgress, _extends({}, sharedProps, barProgressProps))), showLabel && React.createElement(Label, _extends({}, sharedProps, labelProps), getProgressLabel(value, successValue)));
    }
  }]);

  return ProgressBar;
}(React.Component);

_defineProperty(ProgressBar, "defaultProps", {
  getProgressLabel: function getProgressLabel(value, successValue) {
    return "".concat(Math.round(value / successValue * 100), "% Loaded");
  },
  successValue: 100,
  value: 0,
  overrides: {},
  showLabel: false,
  infinite: false
});

export default ProgressBar;