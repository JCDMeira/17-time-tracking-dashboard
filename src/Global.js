import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --blue: #5847EB;
  --orange: #FF8C66;
  --soft-blue : #56C2E6;
  --light-red: #FF5C7C;
  --lime-green: #4ACF81;
  --violet: #7536D3;
  --soft-orange: F1C65B
  --very-dark-blue: #0F1424;
  --dark-blue: #1C1F4A;
  --desaturated-blue: #6F76C8;
  --pale-blue:  #BDC1FF;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: Rubik;
  font-size: 62.5%;
}
`;
