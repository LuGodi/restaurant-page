import "./style.css";
import { init } from "./init.js";
import { createMenu } from "./load-menu.js";

init();
console.log("hey beautiful!");

const buttonElements = {
  home: document.querySelector("#home-button"),
  menu: document.querySelector("#menu-button"),
  about: document.querySelector("#aboutus-button"),
};

buttonElements.menu.addEventListener("click", createMenu);
//the replacement of the content div should be done here probably
