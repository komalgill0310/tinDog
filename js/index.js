import dogsData from "/js/data.js";
import Dog from "/js/Dog.js";

function getNewDog(dogs) {
  let newDog = dogs.shift();
  return dogs.length ? new Dog(newDog) : {};
}

function handleIconClick(e) {
  let element = e.target;
  dog.setHasBeenSwiped(element);
  dog = new Dog(getNewDog(dogsData));
  setTimeout(render, 1500);
}

document.querySelector(".like-icon").addEventListener("click", handleIconClick);
document.querySelector(".nope-icon").addEventListener("click", handleIconClick);

function render() {
  document.querySelector(".main").innerHTML = dog.getDogHtml();
}

let dog = getNewDog(dogsData);
render();
