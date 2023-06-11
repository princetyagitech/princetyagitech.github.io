"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNA(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURdsdQBeeTQtFlvX19fv6+xWaSuEhRNcbPd4fQhSWSApDkgg/ixmjUAY7g9UZPA5JmdQYO/Hi5d87WfHAyeuYp9Hh36SbV67IzORYcud2iv/QOhSQRb6qT//PNkmrcDpjnHeBaG+9jmSFsZDKp4OcvxKMQ968RP/RPpTmLXgAAALnSURBVEjHlZKLeqowEIQXEAIEUBQBK7Xam+//ht1LEiKS055BkyD77yzzCds/Ky7L92RD6jIn2MasbWyKzL0vehbHpX47Mn0YM4+XgniV8h6UuvxkOjll2ZL/XdqZ77P/5stSbwem2zFbCEp8jhXxFderOZfzzqPr59xm3mjqy37iU1w+SK/mtuTj/j7d+/JJWuvPxOSWM5Gv8Nep/36537/76Roy3wubZ14bvDX+/QvLTqDNVrvccpTAee6fAWvx0hPzk+Y77oCT1y63VZaEPJX2r6Jeyz2pfhvM6LZ4qSzfA1fT+yNN76/NQLXLjdwCHU4JaPGr+9fpta+1Ve1yy0PK9ofNBqS6rqe+7qfaNKhLlxsE8Y7mA2t4xR5XQ5vcki4Lmudjyw6OR2txrym3BC8a3bqD3fCiZd9tqOZ4m3n54hQuN6olEf14PrF58lFFgLbuIhpzm83hqQftlBuWHC9RVYFNjFh8Ac4taUfwlMPDXUf9k+QWIU68gLy/t/yoyyCgHEYpGSqiibcs50bPDnsICnNLKLdLJLjz59x4sNNiXl+nlrwpt6qqnL+YHxPSP80PTB8vqcMdP7A35tZgoVp99Y76b5Jb6uGGf2/ZvOPJFX3Uch9bpofKp4V/G+zoSgiQNsp1g4zNafS0qhb8J8/VnoyZUnMbZe5PMt9HhObRI+9yU765aaFYmJuYF4xHvFAfXIAftaMKCJTkhv83og0uLSLLdyClsGTxh1FGHyrERaaDrCCjB9TsbW5FEa0KMLewbG6pM3/iw+ZebkE8gl0TSk5Gb2/FGek0wr+dLLzbCwL0zuV2LlJGIrs8CFTTKDNCM5/d/43pJ0VuFmiEI6nG9rC5Feu47988y+V2/hVPYbfbNbsGP7Kju83t/EV0kXKPQk5zP/Mr7GZf6uFyi8i8KAzIsue0cO0K8veU29y+zoUvptb0yNvczgs8LJ83uQ2XP9M+39jcvhCnBudCdlpcQ/9Mtz/1kF5Y60VRvAAAAABJRU5ErkJggg==",
    alt: "NA"
  }, props));
}