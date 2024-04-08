import IslandFoodImg from "./island-food.jpg";
import {
  writeParagraphToSpan,
  createHeroBanner,
  createImageElement,
} from "./util";
//cached dom just #content
export function init() {
  const contentDiv = document.querySelector("#content");
  const divContentChilds = [];
  const heroBannerEl = document.createElement("div");

  divContentChilds.push(createHeroBanner("The Menu"));

  const mainDivEl = document.createElement("div");
  mainDivEl.classList.add("main");
  divContentChilds.push(mainDivEl);

  const paragraphIntroText = [
    "We aim to serve an unique in a lifetime experience for those who can afford it.",
    "Our food is to die for.",
    "The food is locally produced and sourced on this lovely remote island. Our staff lives in this island because they are one with the restaurant.",
  ];

  mainDivEl.appendChild(writeParagraphToSpan(paragraphIntroText));

  const imgEl = createImageElement(IslandFoodImg);
  mainDivEl.appendChild(imgEl);

  mainDivEl.appendChild(
    writeParagraphToSpan([
      "We let our meat rest for days, not more not less, for maximum flavor.",
    ])
  );

  contentDiv.replaceChildren(...divContentChilds);
}

function createFooterEl() {
  const footerEl = document.createElement("footer");
  footerEl.append(
    (document.createElement("span").textContent = "Chef Idunnow Utim Doin"),
    (document.createElement("span").textContent = "2024")
  );
  return footerEl;
}
