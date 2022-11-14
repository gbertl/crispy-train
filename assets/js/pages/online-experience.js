const readMore = document.querySelector(".btn-link-condensed"); 


document.querySelectorAll('[role="readMore"]').forEach((readMore => {
  // description readmore
  readMore.addEventListener("click", (e) => {  
    const remainingTexts = e.target.closest("span")
    const getText = remainingTexts.querySelectorAll("._remTexts")[0].innerHTML
    console.log(getText)
    
    // hide read more button
    readMore.style.display = "none";
  
    // remove period
    remainingTexts.querySelector(".period").remove();
  
    // append the remaining texts
    const div = e.target.closest("div");
    div.innerHTML += getText;  
  }); 
}))



window.addEventListener('resize', (e) => {
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
  
  console.log(width, height);

  

});