import { useContext } from "react";
import { MainContext } from "../../context/context";

import Context from "../content-components/content/context.component";
import Header from "../header-components/header/header.component";
import ModalWindow from "../modal-mobile/modal-window/modal-window.compoennt";

const Container = () => {
  const{toggleModal, data, handleToggleModal} = useContext(MainContext);
  
  return (
    <>
      <Header/>
      <Context/>
      {
        toggleModal && <ModalWindow data = {data} handleToggleModal = {handleToggleModal}/>
      }
    </>
  );
};

export default Container;