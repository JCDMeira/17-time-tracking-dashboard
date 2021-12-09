import React from 'react';
import P from 'prop-types';

import { AvatarCardConteiner, MyParagraph } from './style';

import photo from '../../assets/images/image-jeremy.png';

function AvatarCard({ name }) {
  const period = 'Weekly';
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
        <MyParagraph period={period === 'Daily'}>Daily</MyParagraph>
        <MyParagraph period={period === 'Weekly'}>Weekly</MyParagraph>
        <MyParagraph period={period === 'Monthly'}>Monthly</MyParagraph>
      </div>
    </AvatarCardConteiner>
  );
}

AvatarCard.propTypes = {
  name: P.string.isRequired,
};

export { AvatarCard };
