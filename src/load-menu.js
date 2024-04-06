import { createImageElement } from "./init";
import "./menu.css";
import MansFolly from "./assets/mans_folly.PNG";
import Memory from "./assets/memory.PNG";
import TheIsland from "./assets/the_island.PNG";
import TheMess from "./assets/the_mess.PNG";
import Cheeseburger from "./assets/cheeseburger.png";
import BreadlessBreadPlate from "./assets/breadless_bread_plate.PNG";
import PassardEgg from "./assets/passard_egg.PNG";

const dishesObject = [
  {
    name: "The Island",
    description: "Flavor our local geography and flora",
    image: TheIsland,
  },
  {
    name: "Memory",
    description: "Evoke fonding memories",
    image: Memory,
  },
  {
    name: "The Bread Plate",
    description: "In a restaurant known for its bread",
    image: BreadlessBreadPlate,
    rotateImage: false,
  },
  {
    name: "The Mess",
    description: "Our sous chef's dish",
    image: TheMess,
  },
  {
    name: "Man's Folly",
    description: "Don't let those who don't deserve it get the best of you",
    image: MansFolly,
  },
  {
    name: "Passard Egg",
    description: "A prize for our winner",
    image: PassardEgg,
  },
  {
    name: "Cheeseburger",
    description: "Just a well made cheeseburger",
    image: Cheeseburger,
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
    return createMenuItem(dish, reverseFlag);
  });
  console.log(menuItemsArr);
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
    dishContainerEl.classList.add("reversed");
  }

  //append dish image
  const dishImageEl = createImageElement(
    dishNameObject.image,
    dishNameObject.rotateImage
  );
  dishImageEl.classList.add("dish");

  dishContainerEl.appendChild(dishImageEl);

  //create dish description container
  const dishDetailsContainer = document.createElement("div");
  dishDetailsContainer.classList.add("dish-description");

  //create dish Name Title
  const dishNameEl = document.createElement("h3");
  dishNameEl.textContent = dishNameObject.name;

  //create the dish description
  const dishDescriptionEl = document.createElement("p");
  dishDescriptionEl.textContent = dishNameObject.description;

  dishDetailsContainer.append(dishNameEl, dishDescriptionEl);
  //can i move this up  ?

  dishContainerEl.append(dishDetailsContainer);
  return dishContainerEl;
}
