import { ImageGalleryItem } from './ImegeGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImegeGellery.style';

export const ImageGallery = ({ imagePac, onClickImg }) => {
  return (
    <div>
      <ImgGallery>
        {imagePac.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            onClickImg={onClickImg}
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ImgGallery>
    </div>
  );
};
