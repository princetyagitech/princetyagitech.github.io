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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import MultiRef from 'react-multi-ref';
import defaultProps from './default-props.js';
import { StyledRoot, StyledInputOverrideRoot, StyledInputOverrideInput } from './styled-components.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { Input as DefaultInput } from '../input/index.js';

var PinCode =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PinCode, _React$Component);

  function PinCode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PinCode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PinCode)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_inputRefs", new MultiRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasFocus: false
    });

    return _this;
  }

  _createClass(PinCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var inputRef = this._inputRefs.map.get(0);

        if (inputRef && inputRef.focus) inputRef.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _getOverrides = getOverrides(this.props.overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(this.props.overrides.Input, DefaultInput),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Input = _getOverrides4[0],
          inputProps = _getOverrides4[1];

      var baseOverrides = {
        Root: {
          component: StyledInputOverrideRoot
        },
        Input: {
          component: StyledInputOverrideInput
        }
      }; // $FlowFixMe

      inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
      return React.createElement(Root, _extends({
        "data-baseweb": "pin-code"
      }, rootProps), this.props.values.map(function (v, i) {
        return React.createElement(Input, _extends({
          "aria-label": _this2.props['aria-label'],
          "aria-labelledby": _this2.props['aria-labelledby'],
          "aria-describedby": _this2.props['aria-describedby'],
          autoComplete: _this2.props.autoComplete,
          disabled: _this2.props.disabled,
          error: _this2.props.error,
          id: _this2.props.id ? _this2.props.id + '-' + i : null,
          inputMode: "numeric",
          inputRef: _this2._inputRefs.ref(i),
          key: i,
          maxLength: "1",
          name: _this2.props.name,
          onBlur: function onBlur() {
            return _this2.setState({
              hasFocus: false
            });
          },
          onFocus: function onFocus() {
            return _this2.setState({
              hasFocus: true
            });
          },
          onChange: function onChange(event) {
            var eventValue = event.target.value; // in the case of an autocomplete or copy and paste

            if (eventValue.length > 2) {
              // see if we can use the string to fill out our values
              if (eventValue.length === _this2.props.values.length && eventValue.match(/^[0-9]+$/)) {
                _this2.props.onChange({
                  values: eventValue.split(''),
                  event: event
                });
              }

              return;
            } // digit was deleted


            if (eventValue === '') {
              var newValues = _this2.props.values.slice();

              newValues[i] = '';

              _this2.props.onChange({
                values: newValues,
                event: event
              });

              return;
            } // we want to override the input value with the last digit typed


            var currentValue = _this2.props.values[i];
            var newValue = eventValue;

            if (currentValue[0] === eventValue[0]) {
              newValue = eventValue[1];
            } else if (currentValue[0] === eventValue[1]) {
              newValue = eventValue[0];
            } // only fire a change event if the new value is a digit


            if (newValue.match(/^[0-9]$/)) {
              var _newValues = _this2.props.values.slice();

              _newValues[i] = newValue;

              _this2.props.onChange({
                values: _newValues,
                event: event
              }); // tab to next pin code input if we aren't at end already


              if (_this2.props.manageFocus && i < _this2.props.values.length - 1) {
                var inputRef = _this2._inputRefs.map.get(i + 1);

                if (inputRef && inputRef.focus) inputRef.focus();
              }
            }
          },
          onKeyDown: function onKeyDown(event) {
            // if we see a backspace/delete and the input is empty, transfer focus backward
            if (_this2.props.manageFocus && event.key === 'Backspace' && _this2.props.values[i] === '' && i > 0) {
              var inputRef = _this2._inputRefs.map.get(i - 1);

              if (inputRef && inputRef.focus) inputRef.focus();
            }
          },
          pattern: "\\d*",
          placeholder: _this2.state.hasFocus ? '' : _this2.props.placeholder,
          positive: _this2.props.positive,
          required: _this2.props.required,
          size: _this2.props.size,
          type: "text",
          value: _this2.props.values[i]
        }, inputProps));
      }));
    }
  }]);

  return PinCode;
}(React.Component);

_defineProperty(PinCode, "defaultProps", defaultProps);

export { PinCode as default };