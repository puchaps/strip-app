import React, { useState } from 'react';
import { SUB_LINK } from '../data/data';

export const MainContext = React.createContext();

const MainContextProvired = ({ children }) => {
  const[data, setData] = useState(SUB_LINK);
  const[toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = (setToggle, valueToggle) => {
    setToggle(!valueToggle);
  };

  return (
    <MainContext.Provider value = {{
      data,
      toggleModal,
      handleToggleModal: () => handleToggleModal(setToggleModal, toggleModal)
    }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvired;