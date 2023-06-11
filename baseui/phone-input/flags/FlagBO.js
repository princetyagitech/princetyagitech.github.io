"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBO(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQF/N/zmCP7qFwOIPNgsH90vIuExJOQzJeU0JlgvyMYAAAEWSURBVDjL1YwxksMgDEU1wwUCJwg5ATO5QAroXYBrN8btVuByO++xVxJge3ecFCky42f09SX9MfwcsyzzTP0bcs7zvCx55e/0BVPOKcU4TWWRUnNlP0Ak0hQPmVrgOQP049j3MZI2F8LmOwgh4KZqdWPEQPEDhErfzBj2rlsDT+jAOWwO1QfHps7F+Q6st9Z6760j58mV2bJ7gLd1h+UcCV84jj95gF1x9oB9wL4ZuL3meo6A0jfNVpFobqou8HQFqaTWKNioVC0pSbW+AEq98x4/xU+zUxeQCN1L1/IfJVCvO3TTXeCYjwTurzHnCBhj7oKLH2E2KwBIDBc/QnCnIAUAh+0MAkoYygI/ejQWTHVCtPkU/AJDawgMp0vluwAAAABJRU5ErkJggg==",
    alt: "BO"
  }, props));
}