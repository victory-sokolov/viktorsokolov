import { config } from "@/common/appconfig";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*"
            }
        ],
        sitemap: `${config.siteUrl}/sitemap.xml`,
        host: config.siteUrl
    };
}
