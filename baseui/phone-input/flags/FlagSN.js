"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSN(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf/xYv7vWBGJRROTSuQjLxacT+gpNfA0QOwvO1yuT7/XV5JEPoYAAAGuSURBVDjL1Y8hTywxFIVbi+oVCNYxzRM8NdtmBA4xqeZlMgL3xKSpxG3lqraSDUHgQCD4l5x2lmZ2wwaB4sxMK853v7vLxppbVrOpuWe/GIgbX/p4AvDeb2JMPvrTQIxxE33cfg2gBQPDKSD5lFLeke5Z13XDmI9hCaCKQJKHAdUwjoCWK/ZESlumxzw9wNEuDZ+BQZd2CfADQHe6CPTQMsHEGUd/AKDVGeo0DIKdC35s0MUAohWC87cXECKFZEPJlqHSc1o07Okhn3nWORyhGEqwArM0rhk8qGxILgT3n81ltrT0PuIe716EtRYGZ90emLNmZ4/5/se5c8HhR7gjgNgFrmshCLM24LPhABDEoNhxzjFtS28BSC1Veddc0KOUO1y2BASA2mMF5+qqyZetKQatcw8Drf68vv0loiUgpWyUlEqptRAXO6LnIwManWuFFbQiQSvxhUHB0VwSxzAOoqmmAHkHIBjmcJqsMfjw3jDV7HsY8jT+JJGZx40B0OwJKS+ppjclZUXu8eJYAGYy/ZSf2TBHLQ19Jgw+ADVLQ4+U4wTQ13wHTD82/BLgA2M9UDGLCjU3AAAAAElFTkSuQmCC",
    alt: "SN"
  }, props));
}