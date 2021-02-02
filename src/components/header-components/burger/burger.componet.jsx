import { useContext } from 'react';
import { MainContext } from '../../../context/context';

import './burger.styles.scss';

const Burger = () => {
  const{handleToggleModal} = useContext(MainContext);
  
  return (
    <div className="burger">
      <img 
        src="https://www.flaticon.com/svg/vstatic/svg/566/566020.svg?token=exp=1612305204~hmac=355acf69ff93392843e9d8cf5f89cc8e"
        alt="menu"
        onClick = {handleToggleModal}
      />
    </div>
  );
};

export default Burger;