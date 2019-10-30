// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errormodal = document.querySelector("#modal");
errormodal.classList.add('hidden');
const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(function(heart) {
  heart.addEventListener("click", clickedFunc)
})

function clickedFunc(event) {
  console.log("Heart was clicked!")
  mimicServerCall()
  .then(function() {
    const heart = event.target
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
  .catch(function(error) {
    errormodal.classList.remove('hidden')
    errormodal.querySelector("p").innerText = error.message;
    setTimeout(function(){errormodal.classList.add('hidden')}, 5000)
  });
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
