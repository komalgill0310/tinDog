function disableButtons(isDisabled) {
  document.querySelector(".like-icon").disabled = isDisabled;
  document.querySelector(".nope-icon").disabled = isDisabled;
}

function getImageSrc(isImageLiked) {
  return isImageLiked
    ? "images/icons/like-image.png"
    : "images/icons/nope-image.png";
}

export { disableButtons, getImageSrc };
