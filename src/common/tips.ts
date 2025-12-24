import type { TipFrontmatter } from "src/types/Post";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { filterFalsyFromObject, toLongDate } from "@vsokolov/utils";
import matter from "gray-matter";

import { getPostData, sortPostByDate } from "./content-utils";
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

        return {
            ...data,
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
