import { writeFileSync } from "fs";
import { Feed } from "feed";
import { config } from "../src/common/appconfig";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { getAllPosts } from "../src/common/posts";
import { PostFrontmatter } from "src/types/Post";

async function markdownToHtml(markdown) {
    const result = await remark().use(remarkHtml).process(markdown);
    return result.toString();
}

export default (async () => {
    if (process.env.NODE_ENV === "development") {
        return;
    }
    const baseUrl = config.siteUrl;
    const date = new Date();
    const author = {
        name: config.author,
        email: config.email,
        link: config.social.twitter
    };
    const feed = new Feed({
        title: config.title,
        description: config.description,
        id: baseUrl,
        link: baseUrl,
        language: config.lang,
        image: config.siteLogo,
        favicon: config.siteLogo,
        copyright: `All rights reserved ${date.getFullYear()}, ${config.author}`,
        updated: date,
        generator: "Next.js",
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
            json: `${baseUrl}/feed.json`,
            atom: `${baseUrl}/atom.xml`
        },
        author
    });
    const posts = await getAllPosts();

    const postPromises = posts.map(async (post: PostFrontmatter) => {
        //convert the markdown to HTML that we'll pass to the RSS feed
        const content = await markdownToHtml(post.content);
        const url = `${baseUrl}${post.slug}`;

        feed.addItem({
            title: post.title,
            id: post.slug,
            link: url,
            description: post.description,
            content: content,
            author: [author],
            contributor: [author],
            date: new Date(post.date)
        });
    });
    await Promise.all(postPromises);

    writeFileSync("./public/rss.xml", feed.rss2());
    writeFileSync("./public/atom.xml", feed.atom1());
    writeFileSync("./public/feed.json", feed.json1());
})();
