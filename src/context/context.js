/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import pageLinks from "../data/data";

export const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(pageLinks);
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = (setToggle, valueToggle) => {
    setToggle(!valueToggle);
  };

  return (
    <MainContext.Provider
      value={{
        data,
        toggleModal,
        handleToggleModal: () => handleToggleModal(setToggleModal, toggleModal),
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
