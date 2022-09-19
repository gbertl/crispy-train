// // open modal btn
// document
//   .querySelector("#host-inbox-filter-button")
//   .addEventListener("click", () => {
//     document.querySelector("#show-filter-modal").classList.remove("hidden");
//   });

// // close modal btn
// document
//   .querySelector("#show-filter-modal__close")
//   .addEventListener("click", () => {
//     document.querySelector("#show-filter-modal").classList.add("hidden");
//   });


function openModal(trigger, modal, callback) {
  document
  .querySelector(trigger).addEventListener("click", () => {
    document.querySelector(modal).classList.remove("hidden");
    if(callback){
      callback()
    }
  });
}

function closeModal(trigger, modal, callback) {
  document
  .querySelector(trigger).addEventListener("click", () => {
    document.querySelector(modal).classList.add("hidden");
    if(callback){
      callback()
    }
  });
}

openModal("#host-inbox-filter-button", "#show-filter-modal");
closeModal("#show-filter-modal__close", "#show-filter-modal");
openModal("#filter-experiences-button", "#show-filter-experience-modal", () => {
  document.querySelector("#show-filter-modal").classList.add("hidden");
});
closeModal("#show-filter-experience-modal__close", "#show-filter-experience-modal", () => {
  document.querySelector("#show-filter-modal").classList.remove("hidden");
});