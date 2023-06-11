/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export const Link = styled('a', ({
  $theme,
  $isFocusVisible
}) => {
  const {
    colors,
    typography,
    animation
  } = $theme;
  return {
    color: colors.linkText,
    ...typography.font350,
    fontSize: 'inherit',
    lineHeight: 'inherit',
    transitionProperty: 'color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ':focus': {
      outline: $isFocusVisible ? `3px solid ${colors.accent}` : 'none',
      outlineOffset: '1px',
      textDecoration: 'none'
    },
    ':visited': {
      color: colors.linkVisited
    },
    ':hover': {
      color: colors.linkHover
    },
    ':active': {
      color: colors.linkActive
    }
  };
});
Link.displayName = "Link";