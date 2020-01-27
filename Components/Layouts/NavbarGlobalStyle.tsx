import { createGlobalStyle } from 'styled-components';

export interface IGlobalStyle {
  isActive: boolean;
}

export const NavbarGlobalStyle = createGlobalStyle<IGlobalStyle>(({isActive}) => `  
html {
  overflow-x: hidden;
  overflow-y: ${isActive ? "hidden" : "auto"};
  margin-right: calc(-1 * (100vw - 100%));			
}
`);