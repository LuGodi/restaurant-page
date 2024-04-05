import "./style.css";
import { init } from "./init.js";
import { createMenu } from "./load-menu.js";

init();
console.log("hey beautiful!");

export const DOMCached = {
  contentDiv: document.querySelector("#content"),
  home: document.querySelector("#home-button"),
  menu: document.querySelector("#menu-button"),
  about: document.querySelector("#aboutus-button"),
};

DOMCached.menu.addEventListener("click", createMenu);
DOMCached.home.addEventListener("click", init);
//the replacement of the content div should be done here probably
