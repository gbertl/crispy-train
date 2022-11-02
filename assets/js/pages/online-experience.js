const readMore = document.querySelector("._15rpys7s"); 

// description readmore
readMore.addEventListener("click", (e) => {  
  
  const readMoreTexts =`thern hospitality is catching! She will provide personalized recommendations on things to see and do while in the amazing Bat City!
  <br> <br>
  Kat can even help you create a custom itinerary! Come find out why Austin has always been one of the friendliest cities and also why people say, “I wasn’t born here, but I got here as quickly as I could!” Then get ready to do the same!`;

  readMore.style.display = "none";
  document.querySelector(".period").remove();
  document.querySelector(".ll4r2nl").innerHTML += readMoreTexts;
  
}); 



