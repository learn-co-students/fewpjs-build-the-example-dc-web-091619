// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartStates = {
  '♡' : '♥',
  '♥' : '♡'
}

errorContainer().classList.add("hidden")

// document.addEventListener('DOMContentLoaded', () => {
  //errorContainer().classList.add("hidden")
// })


//get all of the like `<li>s` and attach EventListeners that invoke the updateLike callback function
let articleHearts = document.querySelectorAll(".like")
for (let heart of articleHearts) {
  heart.addEventListener("click", updateLike)
}

function updateLike(event){
  console.log("hello from updateLike()");

  let heart = event.target

  mimicServerCall()
    .then( () => {
      heart.innerText = heartStates[heart.innerText]
      heart.classList.contains('activated-heart') ? heart.classList.remove('activated-heart') : heart.classList.add('activated-heart')
    } )
    .catch( (error) => {
      errorContainer().classList.remove("hidden")
      errorContainer().children[1].innerText = error
      setTimeout(function(){
        errorContainer().classList.add("hidden")
      },5000)
    } )
}

function errorContainer(){
  return document.getElementById('modal')
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
