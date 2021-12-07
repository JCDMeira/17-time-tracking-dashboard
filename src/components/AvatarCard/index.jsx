import React from 'react';

import { AvatarCardConteiner } from './style';

import photo from '../../assets/images/image-jeremy.png';

function AvatarCard() {
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
    </AvatarCardConteiner>
  );
}

export { AvatarCard };
