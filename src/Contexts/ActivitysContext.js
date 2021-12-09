/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { api } from '../services/api';

const ActivitysContexts = createContext();

const ActivitysProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [activitys, setActivitys] = useState([]);
  const [period, setPeriod] = useState([]);

  function findInfoPeriod(obj) {
    Object.keys(obj).forEach((key) => {
      // console.log(key); //, obj[key]

      if (key === 'daily') {
        console.log(obj[key]);
        // objFinal.push(obj[key]);
        return obj[key];
      }
      if (obj[key]) {
        if (typeof obj[key] == 'object' || Array.isArray(obj[key])) {
          findInfoPeriod(obj[key]);
        }
      }
    });
  }
  findInfoPeriod(activitys);

  useEffect(() => {}, []);

  useEffect(() => {
    api.get('/profiles').then((response) => {
      // console.log(response);
      // console.log(response.data[0].activitys);
      setActivitys(response.data[0].activitys);
      setName(response.data[0].name);
    });
  }, []);

  // console.log('context', 'period:', period, 'ac:', activitys);

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
