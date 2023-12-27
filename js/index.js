import dogsData from "/js/data.js";
import Dog from "/js/Dog.js";
import { disableButtons } from "/js/utils.js";

let dog = getNewDog(dogsData);

document.querySelector(".like-icon").addEventListener("click", handleIconClick);
document.querySelector(".nope-icon").addEventListener("click", handleIconClick);

function handleIconClick(e) {
  if (!dog.hasBeenSwiped) {
    let element = e.target;
    renderAssociatedImage(element);
    disableButtons(true);
  }
}

function renderAssociatedImage(element) {
  document.querySelector(".dog-container").innerHTML +=
    dog.getAssociatedImageHtml(element);
}

function displayEndMessage() {
  let endMessage = "💖 full, no more 🐾 to choose.";
  document.body.innerHTML = `
    <div class="end-message">
      <h2>${endMessage}</h2>
    </div>
  `;
}

function getNewDog(dogs) {
  let newDog = dogs.shift();
  return dogs.length ? new Dog(newDog) : {};
}

setInterval(() => {
  if (dog.hasBeenSwiped) {
    dog = new Dog(getNewDog(dogsData));
    render();
    !dogsData.length && displayEndMessage();
  }
}, 1500);

function render() {
  document.querySelector(".main").innerHTML = dog.getDogHtml();
}

render();
