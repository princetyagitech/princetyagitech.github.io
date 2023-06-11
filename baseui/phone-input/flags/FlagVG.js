"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVG(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURQEmg9gbMwQskvb19gIpiwUulgMrjgAkgAEnhgYwmgB+N/v7+wBoLwBzMoCVyP/IEoahJu/t7/HCGfrMKe+6wVt1ts7W5XaLwPLW2rDC0wVOYOqWoNwuRFpiZuJebmxrVt5DV9rP3BtAnzRVp+Z6h5io0rylKmGpgDpLau++dlSacxrz8zYAAAK/SURBVEjHxZOLlqMgDIZBxGrRtni/6+n97Ps/4CYIim2n0z27e+bXhhDyhcgwpGlTUR0D0E5QSsUO3eB4EbLX/lsRkbZnJrM1n0nRtL3IPuALUbZjKS4Wf6xEOdIzy4MP+CBjcmwbkZ8MXzB2pvNXfcvzk2Q97SWrFH/J4YtwWgTBRzz0mwu1oeJF2VOK7XAecJP1lT/xQVCJhtJU8WVLp+OAzCnXZCuPG1/XITulXJTNxKdNyuRFBTPONcNXsmNETGJoVP+WskeMP4nQr8V2/Fv9b97hDrxveGYJGVvZwjr1dlG9xKfzv0iG54582pSsmv4oGWY5qgdu41BA9YUi8OM7Bvedah5uD6sCtahzUNu15hXgTzmD29OXun+4vfCvc3TWAuaQHGbrLHwm4ca2Kcsviq9w2sv89MQnSbK9KWvzldpQysLZKb5Q7YylNAU8ZbYR7nwTN9w/snh5pmPKKui3mPjpONpSZoDioypE2wjISlRgwccFtUZG2shcpWoe4qccqqbozoqiKE5iKSRY8HVdzyN9KXdcpRQSeImQc4SvGlPprPhDfGBMgkXeiMBJaTeTqAxdV01y75GXz3wByaZAURSZmfAsOz70v49zloNd8e4irOSq3Y0/j16o9q9YpfYPPU/nEQ2ieac6CoG8sRvyYTjHifuBPNevwxA7/4VfEYb1n/GYF+L+obbkNe/PZh2El0ADs2qrLiyaZ4a1q6P4dh2x+E3XzbxK8HWiP8mdfkuBLkm6pYEapzqXTPkL6S6kGXx/SJJ4MAXqIU6SQVPEN+ycvATmBRLvk/3+ej0cDtfrHvyY+Nb+K7kPDSnd472t+G7WnvnXVclwnenrQN5krsLEeOCQezcMQ3cnNkWsdZ9MI8r4epyjynvIfdbzkhX5kvoRbcyw2bzy7fnr+N+JrD2inj8g/93+P8P/BsY+WOwSYOzMAAAAAElFTkSuQmCC",
    alt: "VG"
  }, props));
}