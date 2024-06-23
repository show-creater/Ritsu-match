import React, { createContext, useState, useContext, useEffect } from 'react';
const HomeContext = createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [isLogin, setIsLogin]=useState(false);
  const [loginUser, setLoginUser]=useState('');
  const [talkPage, setTalkPage] = useState(true);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isTime, setIsTime] = useState(false);

    return (
      <HomeContext.Provider value={{ isLogin, setIsLogin ,loginUser ,setLoginUser, talkPage, setTalkPage, isTimeout, setIsTimeout, isTime, setIsTime}}>
        { children }
      </HomeContext.Provider>
    );
  };