import type { TipFrontmatter } from "src/types/Post";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { filterFalsyFromObject, toLongDate } from "@vsokolov/utils";
import matter from "gray-matter";

import { getPostData, parseTags, sortPostByDate, tagToSlug } from "./content-utils";
import { filterFolders } from "./utils";

export const getAllTips = async (): Promise<TipFrontmatter[]> => {
    const twitterTipsPath = "content/tips";
    const tipsPath = path.join(process.cwd(), twitterTipsPath);
    const tipsData = await filterFolders(tipsPath);

    const tips = tipsData.map(async slug => {
        const filePath = `${tipsPath}/${slug}/${slug}.mdx`;
        const file = matter.read(filePath);
        const data = filterFalsyFromObject(file.data);
        const imgPath = `/tips/${slug}/${data.featureImage}`;
        const lastModified = fs.statSync(filePath).mtime.toString();
        const tags = parseTags(data.tags as string | string[]);

        return {
            ...data,
            tags,
            content: file.content,
            date: toLongDate(data.date as string),
            featureImage: imgPath,
            lastModified,
        };
    });
    const allTips = await Promise.all(tips);
    const sortedTips = sortPostByDate(allTips as TipFrontmatter[]);
    return JSON.parse(JSON.stringify(sortedTips));
};

export const getTipBySlug = async (slug: string) => {
    const tips = await getAllTips();
    return getPostData(tips, slug);
};

export const getAllTipTags = async (): Promise<string[]> => {
    const tips = await getAllTips();
    const tagSet = new Set<string>();
    tips.forEach(tip => tip.tags?.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet);
};

export const getTipsByTag = async (tag: string) => {
    const tips = await getAllTips();
    const tagSlug = tagToSlug(tag);
    return tips.filter(tip => tip.tags?.some(currentTag => tagToSlug(currentTag) === tagSlug));
};
