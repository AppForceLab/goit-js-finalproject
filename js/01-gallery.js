import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
let currentInstance = null;

function createImgList(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join("");
}

galleryContainer.insertAdjacentHTML("afterbegin", createImgList(galleryItems));

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const image = event.target;
  if (image.classList.contains("gallery__image")) {
    const source = image.getAttribute("data-source");
    currentInstance = basicLightbox.create(
      `<img src="${source}" alt="${image.alt}">`
    );
    currentInstance.show();

    document.addEventListener("keydown", closeOnEscape);
  }
});

function closeOnEscape(event) {
  if (event.key === "Escape" && currentInstance) {
    currentInstance.close();
    currentInstance = null;
    document.removeEventListener("keydown", closeOnEscape);
  }
}