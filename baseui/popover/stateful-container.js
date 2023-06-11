"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _constants = require("./constants.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStateReducer = function defaultStateReducer(type, nextState) {
  return nextState;
};

var StatefulContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatefulContainer, _React$Component);

  function StatefulContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StatefulContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StatefulContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread({
      isOpen: false
    }, _this.props.initialState));

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      if (_this.state.isOpen) {
        _this.close();
      } else {
        _this.open();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOutside", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      _this.open();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      _this.open();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onContentClose", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function () {
      var content = _this.props.content;

      if (typeof content === 'function') {
        return content({
          close: _this.onContentClose
        });
      }

      return content;
    });

    return _this;
  }

  _createClass(StatefulContainer, [{
    key: "open",
    value: function open() {
      this.internalSetState(_constants.STATE_CHANGE_TYPE.open, {
        isOpen: true
      });

      if (this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.internalSetState(_constants.STATE_CHANGE_TYPE.close, {
        isOpen: false
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: "internalSetState",
    value: function internalSetState(type, changes) {
      var stateReducer = this.props.stateReducer;

      if (typeof stateReducer !== 'function') {
        this.setState(changes);
        return;
      }

      this.setState(function (prevState) {
        return stateReducer(type, changes, prevState);
      });
    }
    /**
     * If user passed a content render prop, we want to give them a
     * callback to close the Popover. This is useful in any case where
     * a dev wants to manually close the popover based on some action.
     *
     * One simple example is a Popover with a "Dismiss" button in it:
     * <StatefulPopover content={({close}) => <button onClick={close}>Dismiss</button>}>
     *  Click me
     * </StatefulPopover>
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          accessibilityType = _this$props.accessibilityType,
          dismissOnClickOutside = _this$props.dismissOnClickOutside,
          dismissOnEsc = _this$props.dismissOnEsc,
          ignoreBoundary = _this$props.ignoreBoundary,
          overrides = _this$props.overrides,
          onMouseEnterDelay = _this$props.onMouseEnterDelay,
          onMouseLeaveDelay = _this$props.onMouseLeaveDelay,
          placement = _this$props.placement,
          popperOptions = _this$props.popperOptions,
          showArrow = _this$props.showArrow,
          triggerType = _this$props.triggerType,
          mountNode = _this$props.mountNode,
          renderAll = _this$props.renderAll,
          autoFocus = _this$props.autoFocus,
          returnFocus = _this$props.returnFocus,
          focusLock = _this$props.focusLock;
      var popoverProps = {
        accessibilityType: accessibilityType,
        ignoreBoundary: ignoreBoundary,
        isOpen: this.state.isOpen,
        overrides: overrides,
        content: this.renderContent,
        onMouseEnterDelay: onMouseEnterDelay,
        onMouseLeaveDelay: onMouseLeaveDelay,
        placement: placement,
        popperOptions: popperOptions,
        showArrow: showArrow,
        triggerType: triggerType,
        mountNode: mountNode,
        renderAll: renderAll,
        autoFocus: autoFocus,
        returnFocus: returnFocus,
        focusLock: focusLock
      };

      if (dismissOnClickOutside) {
        popoverProps.onClickOutside = this.onClickOutside;
      }

      if (dismissOnEsc) {
        popoverProps.onEsc = this.onEsc;
      }

      if (triggerType === _constants.TRIGGER_TYPE.hover) {
        popoverProps.onBlur = this.onBlur;
        popoverProps.onFocus = this.onFocus;
        popoverProps.onMouseEnter = this.onMouseEnter;
        popoverProps.onMouseLeave = this.onMouseLeave;
      } else {
        popoverProps.onClick = this.onClick;
      }

      return this.props.children(popoverProps);
    }
  }]);

  return StatefulContainer;
}(React.Component);

_defineProperty(StatefulContainer, "defaultProps", {
  accessibilityType: _constants.ACCESSIBILITY_TYPE.menu,
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: _constants.PLACEMENT.auto,
  popperOptions: {},
  showArrow: false,
  triggerType: _constants.TRIGGER_TYPE.click,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
  stateReducer: defaultStateReducer
});

var _default = StatefulContainer;
exports.default = _default;