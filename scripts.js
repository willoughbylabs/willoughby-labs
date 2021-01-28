import { html, render } from 'https://unpkg.com/lit-html?module';

const divSidebar = document.querySelector("#sidebar");
const divContentMain = document.querySelector("#content-main");
const divContentTitle = document.querySelector(".content-title");
const divContentBody = document.querySelector(".content-body");

/* EVENT HANDLERS */

divSidebar.addEventListener('click', sidebarClick);

/* SIDEBAR FUNCTIONALITY */

function sidebarClick(evt) {
    const tagName = evt.target.tagName;
    const page = evt.target.textContent;
    // Display home page.
    if (tagName === "H1" || tagName === "IMG") {
        divContentMain.classList.remove("bkg-dark-md");
    }
    // Display selected content for clicked sidebar link
    else if (tagName === "LI") {
        divContentMain.classList.add("bkg-dark-md");
        displayContentTitle(page);
        displayContentBody(page);
    }
}

/* HTML TEMPLATES */

function displayContentTitle(page) {
    const renderTitle = (titleText) => html`<h2>${titleText}</h2>`;
    render(renderTitle(page), divContentTitle);
}

function displayContentBody(page) {
    const renderBody = html`
    <p>Content for ${page} page. Lorem so and so stuff and stuff.</p>
    `;
    render(renderBody, divContentBody);
}
