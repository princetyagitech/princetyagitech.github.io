"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMR(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQpnOA5+RQxzPw+HSv3FND6HP36bPMezOHfhqk8AAAGKSURBVDjL3U3LbsIwEFz5C7Aj4GqvBFyx+AWTnKFQzonS3otA/H5n1w6PivIBDGQfM7NjWr3Gkt7DUKHGf/W4pAisrNSqqqwUVG06IOGK+IBCjshGa+WLNt9bdJlQhBtRlHh8ViU7rVRSm0xIKIiZ321UjDab7gwZVd8+Eo+Gar8/nfcfLwx9AtqnhqB1Ar0eFid9RCHDBgfYXUqbPGKRjoSyjjcBlBjQXRuk2hC8JKh33DlMfZ06uMOPk00TQmBhwuwo7eKm0idH3LE87cmxk5HDGsbQBW6ZeYEYWdl5YnWgNo6l62Hf6Q1+I2KBKH3nuCAkl0lmJITC7moe5kPDw52n4YoXqSvT7LS+sneGWWrKG306PjOAr9VxSGn712DyG6n53n+eUlor47PBCNgDfEoFW2WURII2NvjPi37GrGdGDF4kQ0LRQfXaG73xoGAwlAeNm19S8+X1vDxOaJSDxEiA6KBgEUoIn105ykgk5WAdSKPgM/qnm05ZL/DFoZm6ZvHmuMdz9r3xCziLnkV+cfuIAAAAAElFTkSuQmCC",
    alt: "MR"
  }, props));
}