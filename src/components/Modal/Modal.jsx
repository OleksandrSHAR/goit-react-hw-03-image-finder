import { Component } from 'react';
import { Overlay, ModalImg } from './Modal.style';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onCloseModal);
  }

  render() {
    const { modalAlt, modalUrl, onCloseModal } = this.props;
    return (
      <Overlay onClick={onCloseModal}>
        <ModalImg>
          <img src={modalUrl} alt={modalAlt} width="800" height="600" />
        </ModalImg>
      </Overlay>
    );
  }
}
