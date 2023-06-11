"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLC(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURYDV//3ROv3UQ/j4+HbR/3PQ/3DP/3vT/4TW/23O/yEhH/7XTrHi+5fb/svr+ldRPMCkQuPy+e/t5KOjovLelHd3d83NzfrjwqoAAAIdSURBVEjH5VLbluQgCCRRczO3zmTm/z91ERA0k8zZ3X7Yhy3TqFAFSZ2G4T3A/66H1AMj5H58vuSe8lDmIV/zCTFDrQNlyt1gU0BbL26xcqUrlc9Y3fqbzHs4595Qw4z6+e/l/Qv1r/tScSpX9SzOfTh0MCeUYqFolFIEKffo3jEd6CALLd+zqsypUqeQex8TvoC2zS9hABvZV4UEdG+bNnQwE6xPr+9xFdowdO9rmqYv9ypLlyHXmQXQvU/Uf6KD9wT4WZ/cS0AHn0nPenIvwRy8wLPe65WXZMi9BHHQS973ysMAPiutzil2bxcHRSLBmoCO5SbcBiO7t8edHaRcrhU7JIVnJR25h/fk3hZj3MjBklIyQeQ6XggDuRcTyMHB1DKbd/A18hRybyf9Tg5WVQP4eyT3WJ4aoIMPvAd9cm8TeWw3chARbvQhpXn5fET33Na2sUVxWvgBq89MeUTPScmHECik/96OOgJue3Iw5KpxkRlKeKmjeztLI8cdHQx5UNBOtd7r4eXOtsaJDoYbwF1ycUd7xeEWqXa1vtMlTwjrwZ/e4OIdP+JYSas0foC2DkGBGg349g1pMSSkG37BEKgubYjeQacyjfPZGKhHatOecxYpOWR9CX+0PPOC9vDfyawfi0xYYnOPOAtX6SPqRznl1Z3NE05TC7eD0dDRj2pFrr5fc0CNZLYR5V5KvuXpBOO1958Bxvfwr/W/AJX3P26BuoG8AAAAAElFTkSuQmCC",
    alt: "LC"
  }, props));
}