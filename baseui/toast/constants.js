"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEMENT = exports.TYPE = exports.KIND = void 0;

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var KIND = Object.freeze({
  info: 'info',
  positive: 'positive',
  warning: 'warning',
  negative: 'negative'
});
exports.KIND = KIND;
var TYPE = Object.freeze({
  inline: 'inline',
  toast: 'toast'
});
exports.TYPE = TYPE;
var PLACEMENT = Object.freeze({
  topLeft: 'topLeft',
  top: 'top',
  topRight: 'topRight',
  bottomRight: 'bottomRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft'
});
exports.PLACEMENT = PLACEMENT;