import Modal from 'react-modal';
// import css from './ImageModal.module.css'

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
      <button onClick={()=>onClose()}>close</button>
       {children}
      </Modal>
  );
}