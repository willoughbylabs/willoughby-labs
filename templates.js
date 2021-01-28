import { html } from "https://unpkg.com/lit-html?module";

export const homeContentBody = html`
    <h3>Make fetch happen</h3>
`;

export const projectsContentBody = html`
<p>PROJECTS CONTENT, lorem lorem this and that so and so stuff and stuff.</p>
`;

export const blogContentBody = html`
<p>BLOG CONTENT, lorem lorem this and that so and so stuff and stuff.</p>
`;

export const storageContentBody = html`
<p>STORAGE CONTENT, lorem lorem this and that so and so stuff and stuff.</p>
`;

export const aboutContentBody = html`
<p>ABOUT CONTENT, lorem lorem this and that so and so stuff and stuff.</p>
`;


export const renderTitle = (titleText) => html`<h2>${titleText}</h2>`;