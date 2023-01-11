import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery=document.querySelector(".gallery");

const listImg= galleryItems.map((element)=>`<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />
    </a>
    </div>`)
    .join('');
gallery.innerHTML=listImg;

let instance;

gallery.addEventListener("click",(event)=>{
    event.preventDefault();
    const original =event.target.dataset.source;
    // Бібліотека basiclightbox
    instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">`)
    instance.show()
    // Бібліотека basiclightbox
});

document.addEventListener("keydown", (e)=>{
    console.log(e.key)
    if(e.key==="Escape"){
        // Бібліотека basiclightbox
        instance.close();
        // Бібліотека basiclightbox
    }
});

console.log(galleryItems);
