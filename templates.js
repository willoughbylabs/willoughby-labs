import { html } from "https://unpkg.com/lit-html?module";

// PAGE TITLE
export const renderTitle = (titleText) => html`<h2 class="page-title">${titleText}</h2>`;

// PAGE CONTENT

// HOME PAGE
export const homeContentBody = html`
    <h3>Make fetch happen</h3>
`;

// PROJECTS PAGE
export const projectsContentBody = html`
<div class="content-body-intro">
    <section>
        <p>Brought to you by the teacher in everyone. Please peruse the lab, and I hope you'll discover and share
            something
            interesting(strikethrough) fetch
            today.</p>
    </section>
</div>

<div class="content-body-main">
    <section>
        <div class="content-body-card">
            <div class="card-img">
                <p>Insert GIF of project here</p>
            </div>
            <div class="card-title">
                <h4>myChi</h4>
                <h5>A Concise Data Dashboard</h5>
            </div>
        </div>
    </section>
</div>
`;

// BLOG PAGE
export const blogContentBody = html`
<div class="content-body-intro">
    <section>
        <p>I'm not passionate about hot dogs, but sometimes I'm in the mood for them (especially when dragged through
            the
            garden, Chicago style). Similarly, sometimes I'm in the mood for writing. My favorite writing tool is
            Notion.
            It's fetch. Insert "so fetch" GIF.
            When Notion's API launches I will integrate
            a
            blog here but for now I copy my penning to Blogger. For a TL;DR version of my literature, I also compose on
            Twitter.</p>
    </section>
</div>
`;

// STORAGE PAGE
export const storageContentBody = html`
<div class="content-body-intro">
    <section>
        <p>Thanks to the World Wide Web, these bits of life can now collect dust(strikethrough) in a
            virtual attic. I'm going to need a bigger boat(strikethrough) database to make this work efficiently so
            please
            check back early and often
            for the inevitable content.</p>
    </section>
</div>
`;

// ABOUT PAGE
export const aboutContentBody = html`
<div class="content-body-intro">
    <section>
        <p>My name is Andrew but my friends call me Willoughby. Welcome to my laboratory!</p>
    </section>
</div>

<div class="content-body-main">
    <section>
        <p>Raised in an Air Force family, Chicago is my 10th place to call home. I like to learn and ponder so my
            interests
            expand like the universe. From web dev, architecture, politics, and astronomy to video games, photography,
            vinyl, and cycling, I'm only bored when I want to be. I'm a fledgling developer, and my intended projects
            are
            inspired by simplifying raw data; I feel "seeing the numbers" in a digestible format helps generate
            fact-based
            opinions. Insert "the
            more you know" GIF. </p>
        <p>"At dawn, when you have trouble getting out of bed, tell yourself: ‘I have to go to work—as a human being.
            What
            do I have to complain of, if I’m going to do what I was born for—the things I was brought into the world to
            do?
            Or is this what I was created for? To huddle under the blankets and stay warm?"</p>
        <p>-Marcus Aurelius</p>
        <p>I do like me some covers, but Marcus Aurelius is right - fetch can’t happen without us making fetch happen.
            Insert “fetch is never going to happen” GIF. Let’s prove Regina wrong.</p>
    </section>
</div>
`;