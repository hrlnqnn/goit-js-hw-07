import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function createGallery(images) {
    return images
        .map(({ original, preview, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
        })
        .join('');
}

const imageMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

function createLightBox(img) {
    const instance = basicLightbox.create(`<img src="${img.dataset.source}">`, {
        onShow: instance => {
            document.addEventListener('keydown', closeFromKeyboard.bind(instance));
        },
        onClose: instance => {
            document.removeEventListener('keydown', closeFromKeyboard.bind(instance));
        },
    });

    instance.show();
}

function openGalleryModal(el) {
    el.preventDefault();
    if (el.target.nodeName !== 'IMG') {
        return;
    }

    const imgOnClick = el.target;

    createLightBox(imgOnClick);
}

function closeFromKeyboard(el) {
    if (el.code === 'Escape') {
        this.close();
    }
}

galleryEl.addEventListener('click', openGalleryModal);

