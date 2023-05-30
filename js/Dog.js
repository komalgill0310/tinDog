import { getImageSrc } from "/js/utils.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
    this.imgSrc = "";
  }

  setHasBeenSwiped(hasSwiped) {
    this.hasBeenSwiped = hasSwiped;
    return this.hasBeenSwiped;
  }

  setHasBeenLiked(element) {
    if (element.classList.contains("like-icon")) {
      this.hasBeenLiked = true;
    }
    return this.hasBeenLiked;
  }

  getClickedImageHtml(element) {
    this.imgSrc = getImageSrc(this.setHasBeenLiked(element));
    this.setHasBeenSwiped(true);
    return `
      <img src="${this.imgSrc}"
      alt="dynamic heart or nope image"
      class="like-nope-img"
      />
    `;
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
        <p class="dog-name">${name},</p>
        <p class="dog-age">${age}</p>
        <p class="dog-bio">${bio}</p>
      </div>
      `;
  }
}

export default Dog;
