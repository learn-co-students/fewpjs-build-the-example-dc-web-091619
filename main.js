// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  likeHandler()
})
function likeHandler() {
  
  likeButtons = document.getElementsByClassName('like')
  for(let button of likeButtons) { 
    button.addEventListener("click", function(event) {
      
      console.log("hit")
      mimicServerCall("bunkURL") 
        .then(() => {
          let heart = event.target
          heart.innerText = glyphStates[heart.innerText];
          heart.style.color = colorStates[heart.style.color];
        })
        
    
    .catch(function(error) {
      console.log("Error!")
      const modal = document.getElementById("modal")
      modal.classList.remove("hidden")
      setTimeout(function(){
        modal.classList = "hidden"
      }, 5000)
    })
    })
   }
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

