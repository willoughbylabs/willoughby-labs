import { render } from "https://unpkg.com/lit-html?module";
import { renderTitle, homeContentBody, projectsContentBody, blogContentBody, storageContentBody, aboutContentBody } from "./templates.js";

const divSidebar = document.querySelector("#sidebar");
const divContent = document.querySelector("#content");
const divContentTitle = document.querySelector(".content-title");
const divContentBody = document.querySelector(".content-body");
const navToggle = document.querySelector(".nav-toggle");
const footerNav = document.querySelector(".footer-nav");

/* EVENT HANDLERS */

divSidebar.addEventListener("click", sidebarClick);
navToggle.addEventListener("click", toggleMobileNav);

/* SIDEBAR FUNCTIONALITY */

function sidebarClick(evt) {
    const tagName = evt.target.tagName;
    let page = evt.target.textContent;
    const classes = evt.target.classList;
    // Display home page.
    if (classes.contains("home")) {
        const divPageTitle = document.querySelector(".page-title");
        divContent.classList.remove("bkg-dark-md");
        divPageTitle.innerText = "";
        page = "home";
        displayContentBody(page);
    }
    // Display selected content for clicked sidebar link
    else if (tagName === "A" || tagName === "LI") {
        divContent.classList.add("bkg-dark-md");
        displayContentTitle(page);
        displayContentBody(page);
    }
}

/* NAV TOGGLER */
function toggleMobileNav() {
    footerNav.classList.toggle("display-none");
}

/* HTML TEMPLATE RENDERING */

function displayContentTitle(page) {
    render(renderTitle(page), divContentTitle);
}

function displayContentBody(page) {
    switch (page) {
        case "home":
            render(homeContentBody, divContentBody);
            break;
        case "Projects":
            render(projectsContentBody, divContentBody);
            break;
        case "Article Generator":
            render(blogContentBody, divContentBody);
            break;
        case "Storage Bay":
            render(storageContentBody, divContentBody);
            break;
        case "About":
            render(aboutContentBody, divContentBody);
            break;
    }
}
