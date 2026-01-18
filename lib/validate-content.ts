/**
 * Validates the content structure for posts and tips.
 *
 * For tips: Ensures the folder name matches the 'slug' field in the MDX frontmatter,
 * and checks for required frontmatter fields: title, description, date, slug, tags.
 * For posts: If a 'slug' field exists in frontmatter, ensures it matches the slugified folder name,
 * and checks for required frontmatter fields: title, description, date, tags, published.
 * Also checks that the expected MDX file exists.
 *
 * This validation runs before the build to prevent errors from mismatched folder/file/slug names
 * and missing required metadata.
 */
import { slugify } from "@vsokolov/utils";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const contentDir = path.join(process.cwd(), "content");

function validateContent(type: "posts" | "tips") {
    const dir = path.join(contentDir, type);
    const folders = fs.readdirSync(dir).filter(file => !file.startsWith("."));

    const requiredFields =
        type === "tips"
            ? ["title", "description", "date", "slug", "tags"]
            : ["title", "description", "date", "tags", "published"];

    for (const folder of folders) {
        const filePath = path.join(dir, folder, `${folder}.mdx`);
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            process.exit(1);
        }

        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        // Check required fields
        for (const field of requiredFields) {
            if (
                data[field] === undefined ||
                data[field] === null ||
                (Array.isArray(data[field]) && data[field].length === 0)
            ) {
                console.error(`Missing or empty required field '${field}' in ${type}/${folder}`);
                process.exit(1);
            }
        }

        if (type === "tips") {
            if (data.slug !== folder) {
                console.error(
                    `Slug mismatch in ${type}/${folder}: expected '${folder}', got '${data.slug}'`,
                );
                process.exit(1);
            }
        } else if (type === "posts") {
            const expectedSlug = slugify(folder);
            if (data.slug && data.slug !== expectedSlug) {
                console.error(
                    `Slug mismatch in ${type}/${folder}: expected '${expectedSlug}', got '${data.slug}'`,
                );
                process.exit(1);
            }
        }
    }
}

console.info("Validating content structure...");
validateContent("posts");
validateContent("tips");
console.info("✅ Content validation passed!");
