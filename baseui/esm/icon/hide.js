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
export default function Hide(props) {
  return React.createElement(ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Hide ? React.createElement(theme.icons.Hide, _extends({
      title: "Hide",
      viewBox: "0 0 20 20"
    }, omitDollarPrefixedKeys(props))) : React.createElement(Icon, _extends({
      title: "Hide",
      viewBox: "0 0 20 20"
    }, props), React.createElement("path", {
      d: "M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
    }));
  });
}