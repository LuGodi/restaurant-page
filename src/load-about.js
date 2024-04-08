import {
  createHeroBanner,
  writeParagraphToSpan,
  createImageElement,
} from "./util.js";
import "./about.css";
import { DOMCached } from "./index.js";

export function createAbout() {
  console.log(DOMCached);
  const heroBannerEl = createHeroBanner("", true);
  const mainDivEl = document.createElement("div");
  mainDivEl.classList.add("main");
  const aboutTexts = [
    "Located on an isolated island we have everything.",
    "Our prices are not for everyone, but then again we offer an experience that is not intended for everyone.",
  ];

  const aboutSpan = writeParagraphToSpan(aboutTexts);
  const reservationSpan = writeParagraphToSpan([
    "To make a reservation you need to put your name on the waiting list and we will let you know when and if we want to serve you.",
  ]);
  mainDivEl.append(aboutSpan, reservationSpan);

  DOMCached.contentDiv.replaceChildren(heroBannerEl, mainDivEl);
}
