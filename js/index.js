import dogsData from "/js/data.js";
import Dog from "/js/Dog.js";

function getNewDog(dogs) {
  let newDog = dogs.shift();
  return dogs.length ? new Dog(newDog) : {};
}

function handleIconClick() {
  dog = new Dog(getNewDog(dogsData));
  render();
}

let dog = getNewDog(dogsData);
document.querySelector(".like-icon").addEventListener("click", handleIconClick);

function render() {
  document.querySelector(".main").innerHTML = dog.getDogHtml();
}

render();
