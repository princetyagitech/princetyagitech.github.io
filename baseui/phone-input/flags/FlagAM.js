"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAM(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURfKqLvSwOdwNIuUTKQc5oQo9qe0ZLgxBsA5EtQ9GuBBHuX9Do3QAAAEvSURBVDjL1Y0xboQwEEXHNyA3iMwFkC1Rp4Cewog2ElJqGoTL7TA3WKjSklNmxmMDKWJtEUXaB/5/5vsj4CPNO/xDQSOl7lG8ssdZ6wJ03/uk1JiV3omevkIK0GkeKKiIznN2pfHNQ1pAHsHNu1RKooT0FaSSuEvpUzIc6J5XiQUZK/KwA5X7Qoq/KHzt+0ps+75tYfYbyraun+CcW5Z1vd9dYFnO2bkbuDQ3sM7Ns7XzPE2k14luBpgQS8eSTsfEm+VCggFGZAoHdWIf4zZA27WBLoykI1pH2gBvP7kEvpCigdq0BgdjyGt8/OQ38gaquiJYq8rwWIesfoNwgZu5tljq6iz8wgOFlzTZcxSyJAJAUEUgIRG8cSKwABl1yMDX+cB5EQL8l4iZ4P/C8/ANSBY/XZLL6xwAAAAASUVORK5CYII=",
    alt: "AM"
  }, props));
}