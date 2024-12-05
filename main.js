// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorHeader = document.querySelector('#modal'); //grabbing the modal div
errorHeader.classList.add('hidden');     //adding the hiddent class to the div

const likeButtons = document.querySelectorAll('.like-glyph'); //grabbing all the like buttons
likeButtons.forEach(button => {
  button.addEventListener('click', clickedOnHeart)
})

function clickedOnHeart(event){
  console.log('You have clicked the heart button'); //this function used to double check that all buttons have an event listener.
  mimicServerCall('exampleURL')
  .then(function() {
    console.log('changed heart', event);
    if (event.target.innerText === EMPTY_HEART) {
      event.target.innerText = FULL_HEART;
      event.target.classList.add('activated-heart');
    } else {
      event.target.innerText = EMPTY_HEART;
      event.target.classList.remove('activated-heart');
    }
 
  })
  .catch(function(error) {
    console.log(error.message);
    errorHeader.classList.remove('hidden');
    errorHeader.innerText = error.message;
    
    setTimeout(function(){
      errorHeader.classList.add('hidden');
    }, 5000);
  });
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

