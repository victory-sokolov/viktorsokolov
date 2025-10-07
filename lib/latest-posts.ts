import fs from "node:fs";
import axios from "axios";
import parser from "xml2json";
import { config } from "@/src/common/appconfig";

const FEED_URL = `${config.siteUrl}/rss.xml`;
const TEMPLATE = [
    {
        open: "<!-- POST-START -->",
        close: "<!-- POST-END -->",
    },
    {
        open: "<!-- TIP-START -->",
        close: "<!-- TIP-END -->",
    },
];
const LATEST_N_POSTS = 5;

const toMarkDownLinks = (links: []) => {
    return links
        .slice(0, LATEST_N_POSTS)
        .map(({ title, link }) => `- [${title}](${link})`)
        .join("\n");
};

const fetchLatestContent = async () => {
    const articles = await axios.get(FEED_URL);
    const articlesText = await articles.data;
    const articlesJSON = parser.toJson(articlesText);
    const posts = JSON.parse(articlesJSON).rss.channel.item.filter(
        item => !item.link.includes("/tips/"),
    );
    const tips = JSON.parse(articlesJSON).rss.channel.item.filter(item =>
        item.link.includes("/tips/"),
    );

    return {
        post: toMarkDownLinks(posts),
        tip: toMarkDownLinks(tips),
    };
};

async function main() {
    const content = await fetchLatestContent();

    TEMPLATE.forEach(tag => {
        const readme = fs.readFileSync("./README.md", "utf8");

        const indexBefore = readme.indexOf(tag.open) + tag.open.length;
        const indexAfter = readme.indexOf(tag.close);
        const readmeContentChunkBreakBefore = readme.substring(0, indexBefore);
        const readmeContentChunkBreakAfter = readme.substring(indexAfter);
        const contentType = tag.open.split("-").at(2)?.toLowerCase()?.trim() as string;
        const latestContent = `
${readmeContentChunkBreakBefore}
${content[contentType]}
${readmeContentChunkBreakAfter}
    `;

        fs.writeFileSync("./README.md", latestContent.trim());
    });
}

try {
    await main();
} catch (error) {
    console.error(error);
}
