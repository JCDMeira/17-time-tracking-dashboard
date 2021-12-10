import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --blue: #5847EB;
  --orange: #FF8C66;
  --soft-blue : #56C2E6;
  --light-red: #FF5C7C;
  --lime-green: #4ACF81;
  --violet: #7536D3;
  --soft-orange: #F1C65B;
  --very-dark-blue: #0f1424;
  --dark-blue: #1C1F4A;
  --desaturated-blue: #6F76C8;
  --pale-blue:  #BDC1FF;
  --white: #ffffff;
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

export const Conteiner = styled.div`
  width: 100vw;
  height: 146.9rem;
  background: var(--very-dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;

  .c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @media (min-width: 1200px) {
    height: 100vh;
  }
`;
