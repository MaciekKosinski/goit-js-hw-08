import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const photoGallery = document.querySelector(".gallery");
photoGallery.innerHTML = makeGallery(galleryItems);

function makeGallery(item) {
    return item
        .map(({ preview, original, description }) => {
            return `<li class="gallery__list">
                    <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" 
                    alt="${description}" />
                    </a>
                    </li>`;
        })
        .join(" ")
};

var lightboxGalleryModal = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 500,
    disableRightClick: true,
});
