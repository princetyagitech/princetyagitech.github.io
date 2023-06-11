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
export default function ArrowRight(props) {
  return React.createElement(ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.ArrowRight ? React.createElement(theme.icons.ArrowRight, _extends({
      title: "Arrow Right",
      viewBox: "0 0 24 24"
    }, omitDollarPrefixedKeys(props))) : React.createElement(Icon, _extends({
      title: "Arrow Right",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 12C6 12.5523 6.44772 13 7 13H14.5858L12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071C12.6834 17.0976 13.3166 17.0976 13.7071 16.7071L17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929L13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711L14.5858 11H7C6.44772 11 6 11.4477 6 12Z"
    }));
  });
}