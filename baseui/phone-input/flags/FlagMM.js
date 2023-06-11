"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMM(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURfA6TD20PknHSv/LMP/OOv/MNUG7Qu00R//PP+suQUXCRvr6+fb29sTpxOnr3ZbYl2XEZvKvtvFfbv/dd4fJwsgAAAGmSURBVEjH1Y/rYqsgEIQXw0UFwSTv/64F9iJGpT31z+kHssMygwrjPeDP57UeNWrd6D56RJ8eoYSEVn8DWUHfAwxWo02eVchjPhR7jNayh9Jp7iAPdU2Fguyrfe6BaeHu1nibPtA/Hv340/yDZ32It7/6ADLBgzE4DKoyM9FHPtktUkH2B0rXe68fPaB7+s75dz8/9Fhyfuk6+vmQ86GfnwceZdlUPpuTLySytr7qLUBZSJMa0kLEmo+8TZtvpjdhfg/+9pFlOHrP8pkUKBPqLCKkUyfMlkcli6LXmHMheBlxlbNdBSvgHTPK/A94AT7LwC+wImqFXatBpS0d0uGYE2AvUHYJzJJ3F4Cq3rMRJR8PHhGgClYRIpRaw8bantm2QJOwtNRpE766LD59hqlaBeqKmkyqXhMvXZf58vmxfPca+QdO81c8Q3ge5c+J8SX6FeO/xl/P1+Xuv8I5qAMLq4+KDrdtaC8HjkujmgrshF2/XvQb4ES5X940sZy27oQLjuOU/uQAa4YKKjGVJk3XCNJuAolw2W7h5K7KOQqYbuBu5qf7+S+CeD9eFEf00gAAAABJRU5ErkJggg==",
    alt: "MM"
  }, props));
}