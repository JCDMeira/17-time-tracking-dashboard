/* eslint-disable no-unused-vars */
import React from 'react';

import { ActivityCard } from './components/ActivityCard';
import { AvatarCard } from './components/AvatarCard';
import { Content } from './components/Content';

import { Conteiner, GlobalStyle } from './Global';

import { ActivitysConsumer } from './Contexts/ActivitysContext';

function App() {
  const test = [0, 1, 2, 3, 4, 5];
  const { name, activitys } = ActivitysConsumer();

  console.log(activitys);

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content>
          <AvatarCard name={name} />
          {activitys?.map((values, index) => {
            return <ActivityCard key={index} tagCard={index} />;
          })}
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
