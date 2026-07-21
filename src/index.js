import "./style.css";
import { homepage } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
const contentDiv = document.querySelector("#content");

const navButtons = [homeBtn, menuBtn, aboutBtn];

const setActiveButton = function(activeButton) {
    navButtons.forEach((button) => button.classList.remove("active"));
    activeButton.classList.add("active");
}

const renderPage = function(page) {
    contentDiv.textContent = "";
    page();
}

homeBtn.addEventListener("click" , () => {
    renderPage(homepage);
    setActiveButton(homeBtn);
});

menuBtn.addEventListener("click" , () => {
    renderPage(menu);
    setActiveButton(menuBtn);
});

aboutBtn.addEventListener("click" , () => {
    renderPage(about);
    setActiveButton(aboutBtn);
});

homepage();
setActiveButton(homeBtn);
