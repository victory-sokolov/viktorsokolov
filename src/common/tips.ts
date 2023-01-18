import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { toLongDate, filterFalsyFromObject } from "@vsokolov/utils";
import { getPostData, sortPostByDate } from "./content-utils";
import { TipFrontmatter } from "src/types/Post";

export const getAllTips = (): TipFrontmatter[] => {
    const twitterTipsPath = "content/tips";
    const tipsPath = path.join(process.cwd(), twitterTipsPath);

    const tips = fs.readdirSync(tipsPath).map(slug => {
        const file = matter.read(`${tipsPath}/${slug}/${slug}.mdx`);
        const data = filterFalsyFromObject(file.data);

        return {
            ...data,
            content: file.content,
            date: toLongDate(data.date as string),
            featureImage: `/tips/${slug}/${data.featureImage}`
        };
    }) as TipFrontmatter[];
    const sortedTips = sortPostByDate(tips);
    return JSON.parse(JSON.stringify(sortedTips));
};

export const getTipBySlug = async (slug: string) => {
    const tips = getAllTips();
    return getPostData(tips, slug);
};
