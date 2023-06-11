"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("./styled-components.js");

var _overrides = require("../helpers/overrides.js");

var _utils = require("./utils.js");

var _focusVisible = require("../utils/focusVisible.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var StarRating =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StarRating, _React$Component);

  function StarRating() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StarRating);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StarRating)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false,
      previewIndex: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (value) {
      var onChange = _this.props.onChange;
      onChange && onChange({
        value: value
      });

      _this.setState({
        previewIndex: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePreview", function (previewIndex) {
      _this.setState({
        previewIndex: previewIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if ((0, _focusVisible.isFocusVisible)(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderRatingContents", function () {
      var _this$props = _this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? -1 : _this$props$value,
          numItems = _this$props.numItems;
      var previewIndex = _this.state.previewIndex;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.Item, _styledComponents.StyledStar),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Star = _getOverrides2[0],
          starProps = _getOverrides2[1];

      var ratings = [];
      var refs = [{
        current: null
      }];

      var _loop = function _loop(x) {
        var isFocusable = x === value || value < 1 && x === 1;
        var starRef = React.createRef();
        refs.push(starRef);
        ratings.push(React.createElement(Star, _extends({
          key: x,
          role: "radio" // eslint-disable-next-line flowtype/no-weak-types
          ,
          ref: starRef,
          tabIndex: isFocusable ? '0' : '-1',
          "aria-setsize": numItems,
          "aria-checked": x <= value,
          "aria-posinset": x,
          $index: x,
          $isActive: previewIndex !== undefined ? x <= previewIndex : x <= value,
          $isSelected: x === previewIndex,
          $isFocusVisible: _this.state.isFocusVisible && isFocusable,
          onClick: function onClick() {
            return _this.selectItem(x);
          },
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode === _utils.ARROW_UP || e.keyCode === _utils.ARROW_LEFT) {
              e.preventDefault && e.preventDefault();
              var prevIndex = value - 1 < 1 ? numItems : value - 1;

              _this.selectItem(prevIndex);

              refs[prevIndex].current && refs[prevIndex].current.focus();
            }

            if (e.keyCode === _utils.ARROW_DOWN || e.keyCode === _utils.ARROW_RIGHT) {
              e.preventDefault && e.preventDefault();
              var nextIndex = value + 1 > numItems ? 1 : value + 1;

              _this.selectItem(nextIndex);

              refs[nextIndex].current && refs[nextIndex].current.focus();
            }
          },
          onMouseOver: function onMouseOver() {
            return _this.updatePreview(x);
          }
        }, starProps, {
          onFocus: (0, _focusVisible.forkFocus)(starProps, _this.handleFocus),
          onBlur: (0, _focusVisible.forkBlur)(starProps, _this.handleBlur)
        })));
      };

      for (var x = 1; x <= numItems; x++) {
        _loop(x);
      }

      return ratings;
    });

    return _this;
  }

  _createClass(StarRating, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides2 = this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledRoot),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Root = _getOverrides4[0],
          rootProps = _getOverrides4[1];

      return React.createElement(Root, _extends({
        "data-baseweb": "star-rating",
        role: "radiogroup",
        onBlur: function onBlur() {
          return _this2.updatePreview(undefined);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.updatePreview(undefined);
        }
      }, rootProps), this.renderRatingContents());
    }
  }]);

  return StarRating;
}(React.Component);

_defineProperty(StarRating, "defaultProps", {
  overrides: {},
  numItems: 5
});

var _default = StarRating;
exports.default = _default;