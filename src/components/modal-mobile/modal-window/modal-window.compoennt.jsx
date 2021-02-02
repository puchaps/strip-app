import './modal-window.styles.scss';

import ModalItem from '../modal-item/modal-item.component';

const ModalWindow = ({data, handleToggleModal}) => {
  return (
    <div className="modal-mobile">
      <div className="modal-block">
        <div className="modal-close" onClick = {handleToggleModal}>
          &#10006;
        </div>
        <div className="modal-links">
          {
            data.map( (item, index) => <ModalItem key = {index} {...item}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWindow