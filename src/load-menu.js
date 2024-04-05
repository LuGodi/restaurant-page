import { createImageElement } from "./init";
import MansFolly from "./assets/mans_folly.PNG";

const dishesObject = [
  {
    name: "Plate",
    description: "Just a well made cheeseburguer",
    image: MansFolly,
  },
];

export function createMenu() {
  const mainDivEl = document.createElement("div");
  mainDivEl.classList.add("main");
  const menuContainerEl = document.createElement("div");
  menuContainerEl.classList.add("menu-container");

  //just to test lets append with a fake object
  const menuItemsArr = dishesObject.map((dish, index) => {
    const reverseFlag = !!(index % 2);
    createMenuItem(dish, reverseFlag);
  });
  menuContainerEl.append(...menuItemsArr);

  //append menu to the main
  mainDivEl.appendChild(menuContainerEl);
  const contentDiv = document.querySelector("#content");
  contentDiv.replaceChildren(mainDivEl);
}

//A dish container element is composed of
// Dish container div
// img
// div containing H3 and Paragraph
function createMenuItem(dishNameObject, reversed) {
  // {name: plate name,
  //      picture: {importedImageName},
  //      description:

  //this will create a menu piece div that holds one item on the menu
  const dishContainerEl = document.createElement("div");
  dishContainerEl.classList.add("menu-piece");
  if (reversed === true) {
    dishContainerEl.classList.add(reversed);
  }

  //append dish image
  const dishImageEl = createImageElement(dishNameObject.picture);
  dishImageEl.classList.add = "dish";

  dishContainerEl.appendChild(dishImageEl);

  //create dish description container
  const dishDetailsContainer = document.createElement("div");
  dishDetailsContainer.classList.add("dish-description");

  //create dish Name Title
  const dishNameEl = document.createElement("h3");
  dishNameEl.textContent = dishNameObject.dishName;

  //create the dish description
  const dishDescriptionEl = document.createElement("p");
  dishDescriptionEl.textContent = dishNameObject.description;

  dishDetailsContainer.append(dishNameEl, dishDescriptionEl);
  //can i move this up  ?

  dishContainerEl.append(dishDetailsContainer);
  return dishContainerEl;
}
