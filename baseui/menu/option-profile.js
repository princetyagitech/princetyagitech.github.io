"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OptionProfile;

var React = _interopRequireWildcard(require("react"));

var _maybeChildMenu = _interopRequireDefault(require("./maybe-child-menu.js"));

var _styledComponents = require("./styled-components.js");

var _overrides = require("../helpers/overrides.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function OptionProfile(props) {
  var item = props.item,
      getChildMenu = props.getChildMenu,
      getProfileItemLabels = props.getProfileItemLabels,
      getProfileItemImg = props.getProfileItemImg,
      getProfileItemImgText = props.getProfileItemImgText,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      _props$resetMenu = props.resetMenu,
      resetMenu = _props$resetMenu === void 0 ? function () {} : _props$resetMenu,
      $isHighlighted = props.$isHighlighted,
      renderAll = props.renderAll,
      restProps = _objectWithoutProperties(props, ["item", "getChildMenu", "getProfileItemLabels", "getProfileItemImg", "getProfileItemImgText", "overrides", "resetMenu", "$isHighlighted", "renderAll"]);

  var _getOverrides = (0, _overrides.getOverrides)(overrides.ListItemProfile, _styledComponents.StyledListItemProfile),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      ListItemProfile = _getOverrides2[0],
      listItemProfileProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.ProfileImgContainer, _styledComponents.StyledProfileImgContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ProfileImgContainer = _getOverrides4[0],
      profileImgContainerProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.ProfileImg, _styledComponents.StyledProfileImg),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      ProfileImg = _getOverrides6[0],
      profileImgProps = _getOverrides6[1];

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.ProfileLabelsContainer, _styledComponents.StyledProfileLabelsContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      ProfileLabelsContainer = _getOverrides8[0],
      profileLabelsContainerProps = _getOverrides8[1];

  var _getOverrides9 = (0, _overrides.getOverrides)(overrides.ProfileTitle, _styledComponents.StyledProfileTitle),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      ProfileTitle = _getOverrides10[0],
      profileTitleProps = _getOverrides10[1];

  var _getOverrides11 = (0, _overrides.getOverrides)(overrides.ProfileSubtitle, _styledComponents.StyledProfileSubtitle),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      ProfileSubtitle = _getOverrides12[0],
      profileSubtitleProps = _getOverrides12[1];

  var _getOverrides13 = (0, _overrides.getOverrides)(overrides.ProfileBody, _styledComponents.StyledProfileBody),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      ProfileBody = _getOverrides14[0],
      profileBodyProps = _getOverrides14[1];

  var ItemImg = getProfileItemImg(item);

  var _getProfileItemLabels = getProfileItemLabels(item),
      title = _getProfileItemLabels.title,
      subtitle = _getProfileItemLabels.subtitle,
      body = _getProfileItemLabels.body;

  return React.createElement(_maybeChildMenu.default, {
    getChildMenu: getChildMenu,
    isOpen: !!$isHighlighted,
    item: item,
    resetParentMenu: resetMenu,
    renderAll: renderAll
  }, React.createElement(ListItemProfile, _extends({}, restProps, listItemProfileProps), React.createElement(ProfileImgContainer, profileImgContainerProps, ItemImg && (typeof ItemImg === 'string' ? // Render img src string wrapped with image component
  React.createElement(ProfileImg, _extends({
    src: ItemImg,
    alt: getProfileItemImgText(item)
  }, profileImgProps)) : // Or just render the entire component user specified
  React.createElement(ItemImg, profileImgProps))), React.createElement(ProfileLabelsContainer, profileLabelsContainerProps, title && React.createElement(ProfileTitle, profileTitleProps, title), subtitle && React.createElement(ProfileSubtitle, profileSubtitleProps, subtitle), body && React.createElement(ProfileBody, profileBodyProps, body))));
}