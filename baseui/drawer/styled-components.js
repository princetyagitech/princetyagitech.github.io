"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hidden = exports.StyledClose = exports.StyledDrawerBody = exports.StyledDrawerContainer = exports.StyledBackdrop = exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getSizeStyles($size, $anchor) {
  var styles = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: _constants.SIZE_DIMENSION.default,
    height: _constants.SIZE_DIMENSION.full
  };

  if ($anchor === _constants.ANCHOR.left || $anchor === _constants.ANCHOR.right) {
    // If the anchor is horizontal, set the width
    styles.height = _constants.SIZE_DIMENSION.full;

    if (_constants.SIZE[$size]) {
      styles.width = _constants.SIZE_DIMENSION[$size];
    } else if (typeof $size === 'string') {
      styles.width = $size;
    }
  } else {
    // If the anchor is vertical, set the height
    styles.width = _constants.SIZE_DIMENSION.full;

    if (_constants.SIZE[$size]) {
      styles.height = _constants.SIZE_DIMENSION[$size];
    } else if (typeof $size === 'string') {
      styles.height = $size;
    }
  }

  return styles;
}

function getAnchorStyles(props) {
  var $anchor = props.$anchor,
      $isVisible = props.$isVisible,
      $size = props.$size;
  var sizeStyles = getSizeStyles($size, $anchor);
  var left = _constants.ANCHOR.left,
      right = _constants.ANCHOR.right,
      top = _constants.ANCHOR.top,
      bottom = _constants.ANCHOR.bottom;

  switch ($anchor) {
    case right:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateX(0)' : "translateX(".concat(sizeStyles.width, ")"),
          right: $isVisible ? 0 : "-".concat(sizeStyles.width),
          top: 0
        }, sizeStyles);
      }

    case left:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateX(0)' : "translateX(-".concat(sizeStyles.width, ")"),
          left: $isVisible ? 0 : "-".concat(sizeStyles.width),
          top: 0
        }, sizeStyles);
      }

    case bottom:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateY(0)' : "translateY(".concat(sizeStyles.height, ")"),
          left: 0,
          bottom: $isVisible ? '0' : "-".concat(sizeStyles.height)
        }, sizeStyles);
      }

    case top:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateY(0)' : "translateY(-".concat(sizeStyles.height, ")"),
          left: 0,
          top: $isVisible ? '0' : "-".concat(sizeStyles.height)
        }, sizeStyles);
      }

    default:
      {
        return {};
      }
  }
}

var StyledRoot = (0, _index.styled)('div', function (props) {
  return {
    position: 'fixed',
    overflow: 'auto',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  };
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledBackdrop = (0, _index.styled)('div', function (props) {
  var $animating = props.$animating,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $theme = props.$theme;
  return _objectSpread({
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none',
    opacity: $isVisible && $isOpen ? 1 : 0
  }, $animating ? {
    transitionProperty: 'opacity',
    transitionDuration: $theme.animation.timing400,
    transitionTimingFunction: $theme.animation.easeOutCurve
  } : null);
});
exports.StyledBackdrop = StyledBackdrop;
StyledBackdrop.displayName = "StyledBackdrop";
var StyledDrawerContainer = (0, _index.styled)('div', function (props) {
  var $animating = props.$animating,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $theme = props.$theme;
  return _objectSpread({
    backgroundColor: $theme.colors.backgroundPrimary,
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomLeftRadius: $theme.borders.surfaceBorderRadius
  }, getAnchorStyles(props), {
    // Animation
    opacity: $isVisible && $isOpen ? 1 : 0,
    transitionProperty: $animating ? 'opacity, transform' : null,
    transitionDuration: $animating ? $theme.animation.timing400 : null,
    transitionTimingFunction: $animating ? $theme.animation.easeOutCurve : null,
    display: 'flex',
    position: 'fixed'
  });
});
exports.StyledDrawerContainer = StyledDrawerContainer;
StyledDrawerContainer.displayName = "StyledDrawerContainer";
var StyledDrawerBody = (0, _index.styled)('div', function (props) {
  var $theme = props.$theme;
  return _objectSpread({}, $theme.typography.font200, {
    color: $theme.colors.contentPrimary,
    marginTop: $theme.sizing.scale900,
    marginBottom: $theme.sizing.scale900,
    marginLeft: $theme.sizing.scale900,
    marginRight: $theme.sizing.scale900,
    overflow: 'auto',
    width: '100%'
  });
});
exports.StyledDrawerBody = StyledDrawerBody;
StyledDrawerBody.displayName = "StyledDrawerBody";
var StyledClose = (0, _index.styled)('button', function (props) {
  var _ref;

  var $theme = props.$theme,
      $isFocusVisible = props.$isFocusVisible;
  var dir = $theme.direction === 'rtl' ? 'left' : 'right';
  return _ref = {
    // Reset button styles
    background: 'transparent',
    outline: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    // colors
    fill: $theme.colors.primary,
    transitionProperty: 'fill, border-color',
    transitionDuration: $theme.animation.timing100,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    ':hover': {
      fill: $theme.colors.primary600
    },
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none'
    },
    // Positioning
    position: 'absolute',
    top: $theme.sizing.scale500
  }, _defineProperty(_ref, dir, $theme.sizing.scale500), _defineProperty(_ref, "width", $theme.sizing.scale800), _defineProperty(_ref, "height", $theme.sizing.scale800), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "justifyContent", 'center'), _defineProperty(_ref, "alignItems", 'center'), _defineProperty(_ref, "cursor", 'pointer'), _ref;
});
exports.StyledClose = StyledClose;
StyledClose.displayName = "StyledClose";
var Hidden = (0, _index.styled)('div', {
  display: 'none'
});
exports.Hidden = Hidden;
Hidden.displayName = "Hidden";