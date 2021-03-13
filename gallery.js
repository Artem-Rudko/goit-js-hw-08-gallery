import galleryItems from "./gallery-items.js";


const makeGalleryItem = ({preview, original, description}) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('gallery__item');
    
    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = original;
    
    const imageEl = document.createElement('img');
    imageEl.classList.add('gallery__image');
    imageEl.src = preview;
    imageEl.dataset.source = original;
    imageEl.alt = description;

    linkEl.appendChild(imageEl);
    itemEl.appendChild(linkEl);
    
    return itemEl;
}

// console.log(makeGalleryItem(galleryItems[1]));

const galleryItemsSet = galleryItems.map(makeGalleryItem);
// console.log(galleryItemsSet);

const galleryEl = document.querySelector('.js-gallery')
galleryEl.append(...galleryItemsSet);

console.log(galleryEl);