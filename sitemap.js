import GenerateSitemap from "react-router-sitemap-maker";
import Routes from "../src/routes";

const sitemapData = await GenerateSitemap(Routes(), {
  baseUrl: "axelmrak.codes",
  hashrouting: true,
  changeFrequency: "monthly"
});

sitemapData.toFile("./public/sitemap.xml");