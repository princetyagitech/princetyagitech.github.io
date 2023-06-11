"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBT(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURf5TKf/ZTv/XSP9aMf/UQf+ZOmF5E0kAAAFcSURBVDjLhZJRjsMgDEQt+QRBzQGC6D+Sb0DIfyTuf5f12JRG2l2YOrRlnscghba5bpr7Z54Du8yBV1sATebALnPgJQugLYBTHDjCpjV06BOw7tIB84+hoNqwtg+wYRNPDA445AMAxNCNR8xxvGUAvhGjFhbQMUT5AtGkEywaplZ7ApgYekJnL/mVgMZo4aokfwBPtQVwyhzYZQ4kvARfH0Cy/VhsSScJczYJZ01QO6mUKUUJu2FGMXwmimaarU9CJxLY+/NISNFiGjNjW3wEC1FJqSakJ10v7WbqGXYSA2KpqRZVzX489rIv0j4kIKA2yoSMbCGIQkKFhdIbopv0A19RI9yrqre7PjnbL70lEtTUCfXOn71+UmMIvRZwEjQYhJhq10U21DezE/bf3FJrt8iCP+Ajobk5NMJoDPhD/AUy/Svzb5oDJ82BixbAvQCmAxSYD1AgL4B74f8AL3yUcbcLdKkAAAAASUVORK5CYII=",
    alt: "BT"
  }, props));
}