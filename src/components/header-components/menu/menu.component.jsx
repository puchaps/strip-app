import { useContext } from 'react';
import { MainContext } from '../../../context/context';

import './menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Menu = () => {
  const {data} = useContext(MainContext);
  
  return (
    <menu className="menu">
      {
        data.map( (item, index) => {
          return <MenuItem key = {index} {...item}/>
        })
      }
    </menu>
  );
};

export default Menu;