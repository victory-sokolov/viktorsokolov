import fs from "node:fs";
import path from "node:path";
import process from "node:process";
/* eslint no-console: 0 */
import { endsWithAny } from "@vsokolov/utils";

const fsPromises = fs.promises;
const imagesDirs = ["content/posts", "content/tips"];
const extensisons = [".png", ".jpg", ".svg", "webp", ".gif"];
const publicPath = path.join(process.cwd(), "public");

const getDirectories = path => {
    return fs.readdirSync(path).filter(file => {
        return fs.statSync(`${path}/${file}`).isDirectory();
    });
};

const getAllImagesInDirectory = async (directory: string) => {
    const files = await fsPromises.readdir(directory);
    return files.filter(file => endsWithAny(file, extensisons));
};

export default (async () => {
    const publicPosts = `${publicPath}/posts`;
    if (!fs.existsSync(publicPosts)) {
        fs.mkdirSync(publicPosts);
    }
    // Get all images from posts and tips folder
    imagesDirs.forEach(async folder => {
        const subDirectories = getDirectories(folder);
        for await (const dir of subDirectories) {
            const images = await getAllImagesInDirectory(`${folder}/${dir}`);

            for (const image of images) {
                const sourcePath = path.join(process.cwd(), `${folder}/${dir}/${image}`);
                const destinationPath = `${publicPath}/${folder.split("/")[1]}/${dir}`;
                const destFile = `${destinationPath}/${image}`;
                if (!fs.existsSync(destinationPath)) {
                    fs.mkdirSync(destinationPath);
                }
                console.info(`\x1B[32m 🚀 Moving image from ${sourcePath} to ${destFile}`);
                fs.copyFileSync(sourcePath, destFile);
            }
        }
    });
})();
