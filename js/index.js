import dogData from "/js/data.js";
import Dog from "/js/Dog.js";

function render() {
  document.querySelector(".dog-container").innerHTML = dog.getDogHtml();
}

const dog = new Dog(dogData.dog);
