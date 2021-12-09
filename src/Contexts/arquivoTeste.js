// ! este arquivo preserva como o contexto estava antes de alterações
// ! é para o momento que todas as informações forém ser dinâmicas
// ! porém ainda há erros e não é funcional

/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';
import { api } from '../services/api';

const ActivitysContexts = createContext();

const ActivitysProvider = ({ children }) => {
  const [activitys, setActivitys] = useState([]);
  const [period, setPeriod] = useState([]);
  const objFinal = [];

  function findInfoPeriod(obj) {
    Object.keys(obj).forEach((key) => {
      // console.log(key); //, obj[key]

      if (key === 'daily') {
        console.log(obj[key]);
        objFinal.push(obj[key]);
        return;
      }
      if (obj[key]) {
        if (typeof obj[key] == 'object' || Array.isArray(obj[key])) {
          findInfoPeriod(obj[key]);
        }
      }
    });
  }

  // useEffect(() => {
  //   if (objFinal.length === 6) {
  //     setPeriod(objFinal);
  //   }
  // }, [objFinal]);

  useEffect(() => {
    api.get('/profiles').then((response) => {
      // console.log(response);
      // console.log(response.data[0].activitys);
      setActivitys(response.data[0].activitys);
    });
  }, []);

  // console.log(activitys);

  findInfoPeriod(activitys);
  // console.log(period);

  // activitys.map((value, index) => {
  //   console.log(value.title);
  // });

  return (
    <ActivitysContexts.Provider value={{ activitys, setActivitys }}>
      {children}
    </ActivitysContexts.Provider>
  );
};

const ActivitysConsumer = () => useContext(ActivitysProvider);

export { ActivitysContexts, ActivitysProvider, ActivitysConsumer };

ActivitysProvider.propTypes = {
  children: P.object.isRequired,
};
