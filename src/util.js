export function writeParagraphToSpan(paragraphsArray) {
  const spanTextEl = document.createElement("span");
  paragraphsArray.forEach((paragraph) => {
    const paragraphEl = document.createElement("p");
    paragraphEl.textContent = paragraph;
    spanTextEl.appendChild(paragraphEl);
  });

  return spanTextEl;
}

export function createImageElement(ImageObject, rotate = false) {
  const imgEl = new Image();
  imgEl.src = ImageObject;
  if (rotate === true) imgEl.style.transform = "rotate(90deg)";
  return imgEl;
}

export function createHeroBanner(text, bgImg = false) {
  const heroBannerEl = document.createElement("div");
  heroBannerEl.classList.add("hero-banner");
  heroBannerEl.textContent = text;
  if (bgImg === true) {
    heroBannerEl.classList.add("image-banner");
  }
  return heroBannerEl;
}
