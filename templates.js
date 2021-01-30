import { html } from "https://unpkg.com/lit-html?module";

// PAGE TITLE
export const renderTitle = (titleText) => html`<h2 class="page-title">${titleText}</h2>`;

// PAGE CONTENT

// HOME PAGE
export const homeContentBody = html`
    <h3 class="home">Make fetch happen</h3>
`;

// PROJECTS PAGE
export const projectsContentBody = html`
<div class="content-body-intro">
    <section>
        <p>Brought to you by the <span class="highlight">teacher</span> in everyone. Please peruse the lab, and I hope
            you'll <span class="highlight">discover</span> and <span class="highlight">share</span>
            something
            <span class="strikethrough">interesting</span> <span class="highlight">fetch</span>
            today.</p>
    </section>
</div>

<div class="content-body-main">
    <section>
        <div class="content-body-card">
            <div class="card-img">
                <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe
                        src="https://giphy.com/embed/3VL0SRCEhQ63bqURDZ" width="100%" height="100%"
                        style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
            </div>
            <div class="card-content">
                <div class="card-content-header">
                    <h4><a href="http://mychi.willoughbylabs.com" target="_blank" rel="noopener noreferrer">myChi</a>
                    </h4>
                </div>
                <div class="card-content-caption">
                    <h5>A Concise Data Dashboard</h5>
                    <a href="https://github.com/willoughbylabs/mychi" target="_blank" rel="noopener noreferrer"><i
                            class="fab fa-github"></i></a>
                </div>
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
            garden Chicago style).</p>
        <p> Similarly, sometimes I'm in the mood for writing. My favorite writing tool is <a
                href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">Notion</a>. It's <span
                class="highlight">fetch</span>.</p>
        <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
            <iframe src="https://giphy.com/embed/3otPoUjeyRisIDxPhK" width="100%" height="100%"
                style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>When Notion's API launches I will integrate
            a
            blog here but for now I copy my penning to <a href="https://blog.willoughbylabs.com/" target="_blank"
                rel="noopener noreferrer">Blogger</a>.</p>
        <p>For a <span class="highlight">TL;DR</span> version of my "literature", I also compose on
            <a href="https://twitter.com/willowbeehive" target="_blank" rel="noopener noreferrer">Twitter</a>.
        </p>
    </section>
</div>
`;

// STORAGE PAGE
export const storageContentBody = html`
<div class="content-body-intro">
    <section>
        <p>Thanks to the <span class="highlight">World Wide Web</span>, these bits of life can now collect <span
                class="strikethrough">dust</span> in a
            <span class="highlight">virtual attic</span>. I'm going to need a <span class="strikethrough">bigger
                boat</span> database to make this work
            efficiently so
            please
            check back <span class="highlight">early and often</span>
            for the inevitable content.</p>
    </section>
</div>
`;

// ABOUT PAGE
export const aboutContentBody = html`
<div class="content-body-intro">
    <section>
        <p>My name is Andrew but my friends call me <span class="highlight">Willoughby</span>. Welcome to my <span
                class="highlight">laboratory</span>!
        </p>
    </section>
</div>

<div class="content-body-main">
    <section>
        <p>Raised in an Air Force family, <span class="highlight">Chicago</span> is my 10th place to call <span
                class="highlight">home</span>. I like
            to learn and ponder so my
            <span class="highlight">interests expand</span> like the universe. From web dev, architecture, politics, and
            astronomy to video games, photography,
            vinyl, and cycling, I'm only bored when I want to be. I'm a <span class="highlight">fledgling
                developer</span>, and my intended projects
            are
            inspired by <span class="highlight">simplifying raw data</span>; I feel "seeing the numbers" in a digestible
            format helps generate
            fact-based
            opinions.</p>
        <blockquote>"At dawn, when you have trouble getting out of bed, tell yourself: ‘I have to go to work—as a <span
                class="highlight">human</span> being.
            What
            do I have to complain of, if I’m going to do what I was born for—the things I was brought into the world to
            do?
            Or is this what I was created for? To huddle under the blankets and stay warm?" -Marcus Aurelius
        </blockquote>
        <p>I'm not a fan of winter, and I do really really like me some warm and comfy covers, but Marcus Aurelius has a
            point -
            <span class="highlight">fetch</span> can’t happen
            without us making <span class="highlight">fetch</span> happen.</p>
        <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe
                src="https://giphy.com/embed/l2YWgOm7cak7P4Cly" width="100%" height="100%" style="position:absolute"
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>So<span class="highlight"> let’s </span>prove Regina wrong. :)</p>
    </section>
</div>
`;