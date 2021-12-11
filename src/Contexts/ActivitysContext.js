import React, { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { api } from '../services/api';

const ActivitysContexts = createContext();

const ActivitysProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [activitys, setActivitys] = useState([]);
  const [period, setPeriod] = useState([]);
  const [searchPeriod, setSearchPeriod] = useState('weekly');

  useEffect(() => {
    function findInfoPeriod(obj, searchPeriod, store = []) {
      const myStore = store;
      return Object.keys(obj).map((key) => {
        if (key === searchPeriod) {
          myStore.push(obj[key]);
        }
        if (obj[key]) {
          if (typeof obj[key] == 'object' || Array.isArray(obj[key])) {
            findInfoPeriod(obj[key], searchPeriod, myStore);
          }
        }
        return myStore[myStore.length - 1];
      });
    }

    const recursiveResult = findInfoPeriod(activitys, searchPeriod);
    setPeriod(recursiveResult);
  }, [activitys, searchPeriod]);

  useEffect(() => {
    api.get('/profiles').then((response) => {
      setActivitys(response.data[0].activitys);
      setName(response.data[0].name);
    });
  }, []);

  return (
    <ActivitysContexts.Provider
      value={{
        name,
        setName,
        activitys,
        setActivitys,
        period,
        setPeriod,
        searchPeriod,
        setSearchPeriod,
      }}
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
