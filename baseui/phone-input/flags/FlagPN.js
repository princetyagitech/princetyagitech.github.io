"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPN(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURQAlgAQskdgcNAcxmwIpiQUvmAUulQEmgwMqjAEnhhuG2Pr6+vPx8j14LEOAL4SYy++5wH2Sxd07UPjgRHeMwOTWQUqIM6m32cDJaFGcsSlPo8jQ5PLQ1FJusxU/bOfi6ZGrOeJebmN8ulKLt+uapOZ6hxJov9TEbuiMmGJ+Toq2lKWc7/gAAAJkSURBVEjH7ZRrl5owEIZDAhiaUYEF43JdOOrp9v//wM5MuO26dePph37pS3SSCU/eIQbFJU+NrRTqaKSU5qhY1sAw9x9JmFReTd9+5MfeXORgWg9+NE2eN4QtfGUxh6vWyoNXLUAuL6auZr4AuEp6KuXDR1HVwyAHAMu8rU2a07CIlIpYinpqjVsJTFS1YUPmTT9ILofvj76TYAOL2yVT5hspeTsiP4nsSKpN89PxKUawnBx9eLMR17/RGMdRfM9gkvMUhfyzTBZ/q3/OP3h+GD34jGQBUrf/GBtTczLb4kEcYPsYSQL78RHwvMsGmMfTA1a5G+KpLVA8x2nNWARBVQOenqEH5gFP7xVqFfhJBCPgic1TqI/MWxoO0FeevKWKr/i6xBnzGZeT933rx9O72oBFu4L5IuDtwNy4ve/2g/XLhdvK47sP6KVXPtBtj6um1KU8y3GvL6+uw2n6EkMDx1hrHKy8VvhUuCUuT9fEn1/OroP38BzWX1eaRxr/iFAtT+gRf456mqDMZF9OBfCqJFEEs4dui6Jo9TQRt6OaTCg4+/JUugL0PCVC7SVn/3Z6cwUseaH9ebQ/TQU8y4eT/WkqYOWx/lCH2Fwk6S9yzv6AFxeQzHkRemnH9oQfuIBlwpMPnT2JC0ie5JMb2TthAbfVH1dKwgTb4wVu5/Iwqzw7njiRrAqnte4V7qrFngqolhmR+KlD+/1hz+1Qds/yYfi+J7kV3pOn/RPBJH/2G0jsXNwlO2wukub+muv2s7rNvNh5q9vgi57ghbjHn+NFt+/E5+S8Dva+6G/HFMWn/H/9nX4D/4BR4XI/HOEAAAAASUVORK5CYII=",
    alt: "PN"
  }, props));
}