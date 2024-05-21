'use client';

import { createGlobalStyle } from 'styled-components';

import { firaCode, jakartaSans, maShanZheng, soraSans } from './fonts';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  html {
    --jakartaSans-font: ${jakartaSans.style.fontFamily};
    --soraSans-font: ${soraSans.style.fontFamily};
    --firaCode-font: ${firaCode.style.fontFamily};
    --maShanZheng-font: ${maShanZheng.style.fontFamily};
  }
`;

export default GlobalStyles;
