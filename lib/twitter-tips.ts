import { Buffer } from "buffer";
import { fileTypeFromBuffer } from "file-type";
import fs from "fs";
import dotenv from "dotenv";
import axios from "axios";
import { TwitterApi } from "twitter-api-v2";

dotenv.config();

const removeCharacters = (text: string) => {
    return text.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]|#|\./gu, "").replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
};

export default async function getTweets(username: string) {
    const startTime = new Date(new Date().setUTCHours(0, 0, 0, 0));
    const endTime = new Date(new Date().setUTCHours(23, 59, 59, 999));

    const client = new TwitterApi(process.env.TWITTER_TOKEN);
    const timeline = await client.v2.userTimeline(process.env.TWITTER_TIMELINE_ID, {
        "tweet.fields": ["id", "created_at", "attachments", "entities", "text"],
        "media.fields": ["url", "alt_text", "media_key"],
        exclude: ["replies", "retweets"],
        expansions: ["attachments.media_keys"],
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString()
    });
    const tweetData = [];

    for await (const tweet of timeline) {
        const mediasOfTweet = timeline.includes.medias(tweet);
        const tweetDate = new Date(tweet.created_at);
        if (tweet.text.startsWith("🔥")) {
            const medias = mediasOfTweet.at(0);
            const code = medias?.alt_text;

            if (code) {
                const tipText = removeCharacters(tweet.text);
                const tweetObj = {
                    title: tipText.split("\n")[0],
                    url: `https://twitter.com/${username}/status/${tweet.id}`,
                    created_at: tweetDate.toISOString(),
                    text: tipText,
                    hashTags: tweet?.entities?.hashtags.map(({ tag }) => tag),
                    altText: code,
                    image: medias.url
                };
                tweetData.push(tweetObj);
            }
        }
    }

    return tweetData;
}

async function downloadTweetImage(url: string, slug: string) {
    console.info(`Downloading image ${url}...`);
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");
    const fileType = await fileTypeFromBuffer(buffer);
    const outputFileName = `content/tips/${slug}/${slug}.${fileType?.ext}`;
    fs.createWriteStream(outputFileName).write(buffer);
}

async function renderTips() {
    const tweets = await getTweets("victorysokolov");

    for (const tweet of tweets) {
        // Create tip directory
        const tipDir = `content/tips`;
        const description = tweet.text.replace("\n", " ");
        const slug = removeCharacters(tweet.title).toLowerCase().trim().replace(/ /g, "-");
        const imgName = `${slug}.jpg`;

        let content = `---
tweetUrl: ${tweet.url}
title: ${tweet.title.trim()}
description: "${description}"
slug: ${slug}
date: ${tweet.created_at}
featureImage: ${imgName}
tags: ${tweet.hashTags.join(",")}
---`;
        content += "\n```" + tweet.hashTags[0].toLowerCase() + "\n" + tweet.altText + "\n```";
        // Create subfolder
        const subfolder = `${tipDir}/${slug}`;
        if (!fs.existsSync(subfolder)) {
            fs.mkdirSync(subfolder);
            fs.writeFile(`${subfolder}/${slug}.mdx`, content, error => {
                if (error) {
                    console.error(error);
                }
            });
        }

        await downloadTweetImage(tweet.image, slug);
        console.info("----------------------------------------------------");
    }
}

renderTips();
