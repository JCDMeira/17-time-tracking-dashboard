/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { api } from '../services/api';

const ActivitysContexts = createContext();

const ActivitysProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [activitys, setActivitys] = useState([]);
  const [period, setPeriod] = useState([]);
  const [word, setWord] = useState('weekly');
  // const word = 'weekly';

  useEffect(() => {
    function findInfoPeriod(obj, word, store = []) {
      const myStore = store;
      return Object.keys(obj).map((key) => {
        // console.log(key); //, obj[key]

        if (key === word) {
          myStore.push(obj[key]);
          // console.log(obj[key], myStore);
        }
        if (obj[key]) {
          if (typeof obj[key] == 'object' || Array.isArray(obj[key])) {
            findInfoPeriod(obj[key], word, myStore);
          }
        }
        return myStore[myStore.length - 1];
      });
    }

    const recursiveResult = findInfoPeriod(activitys, word);
    // console.log(recursiveResult);
    setPeriod(recursiveResult);
  }, [activitys, word]);

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
      value={{ name, setName, activitys, setActivitys, period, setPeriod }}
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
