import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <li key={id} id={id} class="gallery-item">
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}
