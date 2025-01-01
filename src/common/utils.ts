import fs from "node:fs";

export const filterFolders = async (path: string) => {
    const folders = await fs.promises.readdir(path);
    return folders.filter(file => !file.startsWith("."));
};
