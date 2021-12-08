import React from 'react';
import P from 'prop-types';

import { ActivityCardConteiner } from './style';

import optionsIcon from '../../assets/images/icon-ellipsis.svg';
import workIcon from '../../assets/images/icon-work.svg';

function ActivityCard({ tagCard }) {
  return (
    <ActivityCardConteiner tagCard={tagCard}>
      <img className="activityIcon" src={workIcon} alt="activity icon" />
      <div className="info">
        <img src={optionsIcon} alt="more options" />
        <div className="current">
          <h1>
            Work<span>32hrs</span>
          </h1>
        </div>
        <div className="last">
          <h2>Last Week - 36hrs</h2>
        </div>
      </div>
    </ActivityCardConteiner>
  );
}

ActivityCard.propTypes = {
  tagCard: P.number.isRequired,
};

export { ActivityCard };
