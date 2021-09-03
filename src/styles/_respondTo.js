import { css } from "styled-components";

// https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/

const breakpoints = {
  xxs: '360px',
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px' // This one is new
};

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);