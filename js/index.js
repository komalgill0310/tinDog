import dogsData from "/js/data.js";
import Dog from "/js/Dog.js";

function getNewDog(dogs) {
  return dogs.shift();
}

function handleIconClick() {
  console.log("icon was clicked!");
  render();
}

let dog = new Dog(getNewDog(dogsData));
document.querySelector(".like-icon").addEventListener("click", handleIconClick);

function render() {
  document.querySelector(".main").innerHTML = dog.getDogHtml();
}

render();
