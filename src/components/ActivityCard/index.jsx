import React from 'react';
import P from 'prop-types';

import { ActivityCardConteiner } from './style';

import optionsIcon from '../../assets/images/icon-ellipsis.svg';
import workIcon from '../../assets/images/icon-work.svg';
import playIcon from '../../assets/images/icon-play.svg';
import studyIcon from '../../assets/images/icon-study.svg';
import exerciseIcon from '../../assets/images/icon-exercise.svg';
import socialIcon from '../../assets/images/icon-social.svg';
import selfCareIcon from '../../assets/images/icon-self-care.svg';

function ActivityCard({ tagCard, title }) {
  const icons = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
  ];
  const myBackgroundColor = [
    '--orange',
    '--soft-blue',
    '--light-red',
    '--lime-green',
    '--violet',
    '--soft-orange',
  ];
  return (
    <ActivityCardConteiner
      tagCard={() => `card${tagCard}`}
      myBackgroundColor={myBackgroundColor[tagCard]}
    >
      <img className="activityIcon" src={icons[tagCard]} alt="activity icon" />
      <div className="info">
        <img src={optionsIcon} alt="more options" />
        <div className="current">
          <h1>
            {title}
            <span>32hrs</span>
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
  title: P.string.isRequired,
};

export { ActivityCard };
