import { filterFalsyFromObject, toLongDate } from "@vsokolov/utils";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
// import { getPlaiceholder } from "plaiceholder";
import { TipFrontmatter } from "src/types/Post";

import { getPostData, sortPostByDate } from "./content-utils";

export const getAllTips = async (): Promise<TipFrontmatter[]> => {
    const twitterTipsPath = "content/tips";
    const tipsPath = path.join(process.cwd(), twitterTipsPath);
    const tipsData = await fs.promises.readdir(tipsPath);

    const tips = tipsData.map(async slug => {
        const file = matter.read(`${tipsPath}/${slug}/${slug}.mdx`);
        const data = filterFalsyFromObject(file.data);
        const imgPath = `/tips/${slug}/${data.featureImage}`;
        // const { blurhash } = await getPlaiceholder(imgPath);

        return {
            ...data,
            content: file.content,
            date: toLongDate(data.date as string),
            featureImage: imgPath
            // blurhash: blurhash
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
