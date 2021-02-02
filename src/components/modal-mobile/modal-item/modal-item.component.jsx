import './modal-item.styles.scss';

import MenuLink from '../../header-components/menu-link/menu-link.compoennts';

const ModalItem = ({page, links}) => {
  return (
    <div className="modal-item">
      <div className="modal-page">
        {page}
      </div>
      <div className="modal-items">
        {
          links.map( (item, index) => <MenuLink key = {index} {...item}/>)
        }
      </div>
    </div>
  );
};

export default ModalItem;