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

  getAssociatedImageHtml(element) {
    this.imgSrc = getImageSrc(this.setHasBeenLiked(element));
    this.setHasBeenSwiped(true);
    return `
      <img src="${this.imgSrc}"
      alt="heart or nope image"
      class="like-nope-img"
      />
    `;
  }

  getDogHtml() {
    const { name, avatar, alt, age, bio } = this;
    return `
      <div class="dog-container">
        <img
          src="${avatar}"
          alt="${alt}"
          class="dog-img"
        />
        <div class="dog-info">
          <p class="dog-name-age">${name}, ${age}</p>
          <p class="dog-bio">${bio}</p>
        </div>
      </div>
      `;
  }
}

export default Dog;
