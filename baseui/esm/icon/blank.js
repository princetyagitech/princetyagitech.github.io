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
export default function Blank(props) {
  return React.createElement(ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Blank ? React.createElement(theme.icons.Blank, _extends({
      title: "Blank",
      viewBox: "0 0 24 24"
    }, omitDollarPrefixedKeys(props))) : React.createElement(Icon, _extends({
      title: "Blank",
      viewBox: "0 0 24 24"
    }, props));
  });
}