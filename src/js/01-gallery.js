// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

let createPicture = galleryItems.map(showImage).join('');

function showImage ( {preview, original, description} ) {
    return `
    <li class="gallery__item">
       <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    </li>
    `
};  

galleryEl.insertAdjacentHTML('afterbegin', createPicture);

var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); 