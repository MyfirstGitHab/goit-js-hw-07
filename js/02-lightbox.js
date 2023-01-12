import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery=document.querySelector(".gallery");

const listImg= galleryItems.map((element)=>`<a class="gallery__item" href="${element.original}">
<img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`)
    .join('');
gallery.innerHTML=listImg;
console.log(galleryItems);

let gallerySimpl = new SimpleLightbox('.gallery a',{captionDelay:250, captionsData :	"alt"});
gallerySimpl.on('show.simplelightbox', function () {
	
});
