import './menu-item.styles.scss';

import MenuLink from '../menu-link/menu-link.compoennts'
import { useState } from 'react';

const MenuItem = ({page, links}) => {
  const showLinksFromPage = links.map( (item, index) => <MenuLink key = {index} {...item}/>)
  const[toggleHiden, setToggleHiden] = useState(false);

  return (
    <div 
      className="menu-item"
      onMouseOver = {() => setToggleHiden(true)}
      onMouseOut = {() => setToggleHiden(false)}
    >
      <div className="menu-item-links" >
        <span className="link">
          {page}
        </span>
        <div 
          className={`menu-item-block ${toggleHiden ? 'active' : 'hide'}`}
          onMouseOut = {() => setToggleHiden(false)}
        >
          <span>{page}:</span>
          <div className="menu-item-block-links">
            {showLinksFromPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;