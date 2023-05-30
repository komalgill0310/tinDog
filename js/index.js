import dogsData from "/js/data.js";
import Dog from "/js/Dog.js";
// import { disableButtons } from "/js/utils.js";

function getNewDog(dogs) {
  let newDog = dogs.shift();
  return dogs.length ? new Dog(newDog) : {};
}

// function disableButtons() {
//   if (dog.hasBeenSwiped) {
//     document
//       .querySelector(".like-icon")
//       .addEventListener("click", handleIconClick);
//     document
//       .querySelector(".nope-icon")
//       .addEventListener("click", handleIconClick);
//   } else {
//     document.querySelector(".like-icon").disabled = true;
//     document.querySelector(".nope-icon").disabled = true;
//     console.log("I'm gonna disable both buttons!");
//   }
// }

// disableButtons();
function handleIconClick(e) {
  if (!dog.hasBeenSwiped) {
    let element = e.target;
    renderClickedImage(element);
    document.querySelector(".like-icon").disabled = true;
    document.querySelector(".nope-icon").disabled = true;
    console.log(dog.hasBeenSwiped);
  }
}

document.querySelector(".like-icon").addEventListener("click", handleIconClick);
document.querySelector(".nope-icon").addEventListener("click", handleIconClick);

function render() {
  document.querySelector(".main").innerHTML = dog.getDogHtml();
}

function renderClickedImage(element) {
  document.querySelector(".main").innerHTML += dog.getClickedImageHtml(element);
}
let dog = getNewDog(dogsData);

render();

// setInterval(() => {
//   if (!dog.hasBeenSwiped) {
//     dog = new Dog(getNewDog(dogsData));
//     render();
//   }
// }, 1500);
