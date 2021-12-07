/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AvatarCard } from './components/AvatarCard';
import { Content } from './components/Content';
import { Conteiner, GlobalStyle } from './Global';

import { api } from './services/api';

function App() {
  // const [work, setWork] = useState([]);

  // useEffect(() => {
  //   api.get('/work').then((response) => {
  //     console.log(response);
  //     console.log(response.data);
  //     setWork(response.data);
  //   });
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content>
          <AvatarCard />
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
