class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setHasBeenSwiped(element) {
    this.hasBeenSwiped = true;
    this.setHasBeenLiked(element);
    console.log("swiped: ", this.hasBeenSwiped);
  }

  setHasBeenLiked(element) {
    if (element.classList.contains("like-icon")) {
      console.log("heart was clicked!");
    } else if (element.classList.contains("nope-icon")) {
      console.log("I got rejected!");
    }
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <div class="dog-container">
        <img
          src="${avatar}"
          alt="Dog image of akita breed"
          class="dog-img"
        />
        <img src=""
        alt="dynamic heart or nope image"
        class="icon-img"
        />
        <p class="dog-name">${name},</p>
        <p class="dog-age">${age}</p>
        <p class="dog-bio">${bio}</p>
      </div>
      `;
  }
}

export default Dog;
