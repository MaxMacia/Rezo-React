import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`;

export const Button = styled.input`
  height: 40px;
  width: 50%;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  box-shadow: ${colors.boxShadow};
  cursor: pointer;
  font-size: 1em;
  color: #FFF;
  background-image: linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary});
  transition: all, 0.5s;
  &:hover {
    opacity: 0.8;
    box-shadow: ${colors.darkBoxShadow};
  }
`;