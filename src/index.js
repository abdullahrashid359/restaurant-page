import { homepage } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
const contentDiv = document.querySelector("#content");

const renderPage = function(page) {
    contentDiv.textContent = "";
    page();
}

homeBtn.addEventListener("click" , () => renderPage(homepage));

menuBtn.addEventListener("click" , () => renderPage(menu));

aboutBtn.addEventListener("click" , () => renderPage(about));

homepage();
