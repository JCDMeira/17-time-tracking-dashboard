import React from 'react';

import { AvatarCardConteiner, MyParagraph } from './style';

import photo from '../../assets/images/image-jeremy.png';

function AvatarCard() {
  const period = 'Weekly';
  return (
    <AvatarCardConteiner>
      <div className="infoCard">
        <div className="avatarPhoto">
          <img src={photo} alt="avatar photo" />
        </div>
        <h1>
          Report for<span>Jeremy Robson</span>
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

export { AvatarCard };
