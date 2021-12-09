/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { api } from '../services/api';

const ActivitysContexts = createContext();

const ActivitysProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [activitys, setActivitys] = useState([]);
  const [period, setPeriod] = useState([]);

  useEffect(() => {
    api.get('/profiles').then((response) => {
      // console.log(response);
      // console.log(response.data[0].activitys);
      setActivitys(response.data[0].activitys);
      setName(response.data[0].name);
    });
  }, []);

  // console.log('context', activitys);

  return (
    <ActivitysContexts.Provider
      value={{ name, setName, activitys, setActivitys }}
    >
      {children}
    </ActivitysContexts.Provider>
  );
};

const ActivitysConsumer = () => useContext(ActivitysContexts);

export { ActivitysContexts, ActivitysProvider, ActivitysConsumer };

ActivitysProvider.propTypes = {
  children: P.object.isRequired,
};
