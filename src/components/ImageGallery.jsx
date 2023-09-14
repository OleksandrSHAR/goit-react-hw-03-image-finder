import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ imagePac }) => {
  return (
    <div>
      <ul>
        {imagePac.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    </div>
  );
};
