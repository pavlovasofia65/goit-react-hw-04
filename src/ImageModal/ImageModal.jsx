import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, imageSrc }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {imageSrc && <img src={imageSrc} alt="Selected" className={css.image} />}
        </Modal>
    );
}
