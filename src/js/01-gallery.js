// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const renderGalleryList = (pictures) => pictures.reduce((acc, picture) => acc +
    `<a class="gallery__item" href=${picture.original}>
  <img class="gallery__image" src=${picture.preview} alt=${picture.description} />
</a> `, '');

const addGalleryItems = (string) => {
    galleryEl.insertAdjacentHTML('beforeend', renderGalleryList(galleryItems))};

addGalleryItems(renderGalleryList(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay: 250,
});
