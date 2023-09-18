import { Overlay, ModalImg } from './Modal.style';

export const Modal = ({ modalAlt, modalUrl, onCloseModal }) => {
  return (
    <Overlay onClick={() => onCloseModal()}>
      <ModalImg>
        <img src={modalUrl} alt={modalAlt} width="800" height="600" />
      </ModalImg>
    </Overlay>
  );
};
