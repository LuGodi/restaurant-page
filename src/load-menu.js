import { createImageElement } from "./init";

const dishesObject = {
  dishname: {
    name: "Plate",
    description: "Just a well made cheeseburguer",
    image: "imagesrc",
  },
};

export function createMenu() {
  const mainDivEl = document.createElement("div");
  mainDivEl.classList.add("main");
  const menuContainerEl = document.createElement("div");
  menuContainerEl.classList.add("menu-piece");

  //just to test lets append with a fake object

  //append menu to the main
}

function createMenuItem(dishNameObject, reversed) {
  // {name: plate name,
  //      picture: {importedImageName},
  //      description:

  const dishContainerEl = document.createElement("div");
  dishContainerEl.classList.add("menu-piece");
  if (reversed === true) {
    dishContainerEl.classList.add(reversed);
  }

  //append dish image
  const dishImageEl = createImageElement(dishName.picture);
  dishImageEl.classList.add = "dish";

  dishContainerEl.appendChild(dishImageEl);

  //create dish description container
  const dishDetailsContainer = document.createElement("div");
  dishDetailsContainer.classList.add("dish-description");

  //create dish Name Title
  const dishNameEl = doument.createElement("h3");
  dishNameEl.textContent = dishNameObject.dishName;

  //create the dish description
  const dishDescriptionEl = document.createElement("p");
  dishDescriptionEl.textContent = dishNameObject.description;

  dishDetailsContainer.append(dishNameEl, dishDescriptionEl);
  //can i move this up  ?

  dishContainerEl.append(dishDetailsContainer);
  return dishContainerEl;
}
