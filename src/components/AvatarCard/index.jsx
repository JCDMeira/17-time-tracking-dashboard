import React from 'react';
import P from 'prop-types';

import { AvatarCardConteiner, MyParagraph } from './style';

import photo from '../../assets/images/image-jeremy.png';
import { ActivitysConsumer } from '../../Contexts/ActivitysContext';

function AvatarCard({ name }) {
  const { searchPeriod, setSearchPeriod } = ActivitysConsumer();
  return (
    <AvatarCardConteiner>
      <div className="infoCard">
        <div className="avatarPhoto">
          <img src={photo} alt="avatar photo" />
        </div>
        <h1>
          Report for<span>{name}</span>
        </h1>
      </div>
      <div className="activeTime">
        <MyParagraph
          period={searchPeriod === 'daily'}
          onClick={() => setSearchPeriod('daily')}
        >
          Daily
        </MyParagraph>
        <MyParagraph
          period={searchPeriod === 'weekly'}
          onClick={() => setSearchPeriod('weekly')}
        >
          Weekly
        </MyParagraph>
        <MyParagraph
          period={searchPeriod === 'monthly'}
          onClick={() => setSearchPeriod('monthly')}
        >
          Monthly
        </MyParagraph>
      </div>
    </AvatarCardConteiner>
  );
}

AvatarCard.propTypes = {
  name: P.string.isRequired,
};

export { AvatarCard };
