// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
mimicServerCall();

let heart = document.querySelectorAll(".like-glyph");
heart.forEach(function(element){
  element.addEventListener("click", mimicServerCall);
})

function like(){
 
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
        document.getElementById("modal").classList.remove("hidden")
        console.log("Error 404");
      } else {
        resolve("Pretend remote server notified of action!");
        console.log("Successful Connection");
        
        if (event.target.innerText === "♡"){
          event.target.innerText = FULL_HEART;
          event.target.classList.add("activated-heart");
        }else{
          event.target.innerText = EMPTY_HEART;
          event.target.classList.remove("activated-heart");
        }
      }
    }, 300);
  });
}
