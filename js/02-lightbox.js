import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('ul.gallery');

function createGallery(images) {
    return images
        .map(({ original, preview, description }) => {
            return `
      <div class="gallery">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </div>`;
        })
        .join('');
}

const imageMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('div.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
