function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';
import { ThemeContext } from '../styles/theme-provider.js';
export default function TriangleLeft(props) {
  return React.createElement(ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.TriangleLeft ? React.createElement(theme.icons.TriangleLeft, _extends({
      title: "Triangle Left",
      viewBox: "0 0 24 24"
    }, omitDollarPrefixedKeys(props))) : React.createElement(Icon, _extends({
      title: "Triangle Left",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      d: "M8.70711 11.2929L13.1464 6.85355C13.4614 6.53857 14 6.76165 14 7.20711L14 16.7929C14 17.2383 13.4614 17.4614 13.1464 17.1464L8.70711 12.7071C8.31658 12.3166 8.31658 11.6834 8.70711 11.2929Z"
    }));
  });
}