import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createImgList(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
           <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
        </li>
      `
    )
    .join("");
}
galleryContainer.insertAdjacentHTML("afterbegin", createImgList(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
