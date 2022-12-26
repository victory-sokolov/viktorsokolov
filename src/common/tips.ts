import matter from "gray-matter";
import path from "path";
import { filterFalsy, toLongDate } from "./utils";
import fs from "fs";
import { getPostData, sortPostByDate } from "./content-utils";
import { TipFrontmatter } from "src/types/Post";

export const getAllTips = (): TipFrontmatter[] => {
    const twitterTipsPath = "content/tips";
    const tipsPath = path.join(process.cwd(), twitterTipsPath);

    const tips = fs.readdirSync(tipsPath).map(slug => {
        const file = matter.read(`${tipsPath}/${slug}/${slug}.mdx`);
        const data = filterFalsy(file.data);

        return {
            ...data,
            content: file.content,
            date: toLongDate(data.date),
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
