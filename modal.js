const modalEl = document.querySelector('.js-lightbox');
const modalOverlayEl = document.querySelector('.lightbox__overlay');
const modalImageEl = document.querySelector('.lightbox__image');
const modalBtnCloseEl = document.querySelector('button[data-action="close-lightbox"]');
const galleryEl = document.querySelector('.js-gallery');

function onImageClick(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscKeyPress);
    modalEl.classList.add('is-open');
    modalImageEl.src=event.target.dataset.source;
};

function onModalClose(event) {
    window.removeEventListener('keydown', onEscKeyPress);
    modalEl.classList.remove('is-open');
    modalImageEl.src='';

};

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onModalClose(event)
    }
};

 
galleryEl.addEventListener('click', onImageClick);

modalBtnCloseEl.addEventListener('click', onModalClose);

modalOverlayEl.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
        onModalClose()
    }
});


