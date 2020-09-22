const CacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const Image = require("@11ty/eleventy-img");

module.exports = (function(eleventyConfig) {
  const cacheBusterOptions = {
    createResourceHash(outputDirectory, url, target) {
      return Date.now();
    }
  };
  eleventyConfig.addPlugin(CacheBuster(cacheBusterOptions));

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({ "src/supporting/generated/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/generated/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/vendor-js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/images": "img" }); // unnecessary???

  eleventyConfig.addNunjucksFilter("is_string", function(obj) {
    return typeof obj === "string";
  });

  eleventyConfig.addNunjucksAsyncShortcode("responsiveImage", async function(src, alt, outputFormat = "jpeg") {
    if(alt === undefined) {
      throw new Error(`No alt text provided on responsiveImage with source ${src}`);
    }

    let stats = await Image(src, {
      widths: [250, 500, null],
      formats: [outputFormat],
      urlPath: "/img/",
      outputDir: "./dist/img/",
    });
    let lowestSrc = stats[outputFormat][0];
    let sizes = "500w 100vw"; // Make sure you customize this!

    return `<picture>
      ${Object.values(stats).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => `${entry.url} ${entry.width}w`).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          src="${lowestSrc.url}"
          width="${lowestSrc.width}"
          height="${lowestSrc.height}"
          alt="${alt}">
      </picture>`;
  });

  eleventyConfig.addLayoutAlias("case-study", "../templates/case-study/case-study.njk");

  return {
    dir: {
      input: "src/content",
      output: "dist",
      includes: "components",
      layouts: "../templates"
    }
  }
});
