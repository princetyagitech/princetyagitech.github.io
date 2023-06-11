"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGD(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURdATJtwbLwKCYv/XMP/ZNwWTcNYXKuIgNP7SHAOKaSyYYFWjVd7NNXyuSPq7Kdo+KqK7Qu+KKOhcK+3OJsLEOOEuLZg6PUxjVGplC00AAAI2SURBVEjH7ZLZlqowEEUrxIRMBCKi//+nt4YEsKVbXe1b3xPJWLtOQYT+d4L//Cf4mE7vKcXGK2y9MdNb+GRMzyT7K+TNGyWkaIgnEhSnMaTpdXNT/YmnkXdMeKWEFCQYYQSBhuqPGlqU/g4fWqjiyoEGpdqmCRdEtT5JT12b8HAJa2TPJEgZZtOwRW+/mmTYxbEv+au9P5egj7Uz5/q/4fEqZwHKeemXc+H5aY73QT/wJkxI5BFLXPB+xoyrKZgnfKwRnhcpL/RlCnVL5n+M53bM4/5JJzTxpkaNtL9oyqJGs6KSxPuVtzR47wO9ZcITOb/xcdGFxxuDrJaBti35W2y4HvgzDZwb21WdUVlnGtTV837zpk6MwVIC8h+c005f2AEfUPzZNH9IC3V7FflbdAa2t7gTnXPDnFqAxdOiKWfBQLsDayKi2d8K7yfnfJhaHCBkM+KZJuAfxL4WbPOnNwjb8RWpxZEWnF0PeaqfhlYe4l07vmHusyu2uDOe3w54W/1pQK7rqPO+q20EKPjAWPDx92fULAtk8O1UCuh8nDOeAQnHPEd/l+KBF38+RNG3dHkE0ZhxNe1CeHrHd/WI4S7OdG/OFbx4OxbHqzluITR+5dcM4eKOdQk1ip9HXjTM4ic/VpvOwy5OYOC28V/N9VEJjUccJMlq7p5pLUGMJUHlQ3LPlWoJIPcrb/Ci+b4EW/8f3OE6Jveq8CrRH9YE5D+5dzQRvxP9Y97SHGvlH9Cn8vxF/QMNhDrqIYxiVQAAAABJRU5ErkJggg==",
    alt: "GD"
  }, props));
}