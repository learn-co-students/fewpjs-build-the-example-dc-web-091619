// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden")

document.addEventListener("DOMContentLoaded",()=>{
  //grab the heart, add .eventListener to it
  const jsLike = document.getElementById("js-like");
  jsLike.addEventListener("click",callFetcher);

})

let likedStatus = false;

function callFetcher(e) {
  mimicServerCall()
  .then(function(){
    changeLikedVisual(e)
  })
  .catch(function(){
    document.getElementById("modal").className = "";
  });
}

function changeLikedVisual(event){
  likedStatus = !likedStatus
  if (likedStatus) {
    event.target.textContent = FULL_HEART;
    event.target.classList.add("activated-heart")
  } else {
    event.target.textContent = EMPTY_HEART;
    event.target.classList.remove("activated-heart")
  }
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
