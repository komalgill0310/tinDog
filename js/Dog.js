class Dog {
  constructor(data) {
    Object.assign(this, data);
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
