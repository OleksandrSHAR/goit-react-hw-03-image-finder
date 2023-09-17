import * as basicLightbox from 'basiclightbox';

export const Modal = ({ modalAlt, modalUrl }) => {
  const instance = basicLightbox.create(`<<div class="overlay">
  <div class="modal">
    <img src="${modalUrl}" alt="${modalAlt}" width="800" height="600"/>
  </div>
</div> 
`);
  instance.show();
};
