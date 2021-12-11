import React from 'react';

import { ActivityCard } from './components/ActivityCard';
import { AvatarCard } from './components/AvatarCard';
import { Content } from './components/Content';

import { Conteiner, GlobalStyle } from './Global';

import { ActivitysConsumer } from './Contexts/ActivitysContext';

function App() {
  const { name, activitys, period } = ActivitysConsumer();

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content>
          {name === null ? (
            <div className="c-loader"></div>
          ) : (
            <>
              <AvatarCard name={name || ''} />
              {activitys?.map(({ title }, index) => (
                <ActivityCard
                  key={index}
                  tagCard={index}
                  title={title}
                  period={period[index] || {}}
                />
              ))}
            </>
          )}
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
