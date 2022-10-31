const modal = document.querySelector('._1rp5252');



const gallery = document.querySelector("._wlnonhg");
const imgGallery = document.querySelector("._1u9fru1")

gallery.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('[data-showat="largeAndAbove"] > img').src = "https://a0.muscache.com/im/pictures/34527a29-4963-4a2a-9a15-c694574accbb.jpg?im_w=1200";

    console.log(imgGallery.closest('img'))
  });


modal.addEventListener('click', (e => {
  e.preventDefault();
  document.querySelector('[data-testid=modal-container]').classList.add('hidden')
}))

