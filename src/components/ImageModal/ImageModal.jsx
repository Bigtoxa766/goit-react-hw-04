import Modal from 'react-modal';
import css from './ImageModal.module.css'
import { CgCloseO } from "react-icons/cg";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
   
  },
};
Modal.setAppElement('#root');

export const ImageModal = ({isOpen, onClose, children}) => {

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
    >
      <button className={css.modal_closeBtn} onClick={() => onClose()}><CgCloseO className={css.close_icon } /></button>
       {children}
      </Modal>
  );
}