/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './Global';

import { api } from './services/api';

function App() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    api.get('/work').then((response) => {
      console.log(response);
      console.log(response.data);
      setWork(response.data);
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <h1>Hello world</h1>
      <h2>{work.title}</h2>
    </>
  );
}

export default App;
