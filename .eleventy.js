const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = (function(eleventyConfig) {
  const cacheBusterOptions = {
    createResourceHash(outputDirectory, url, target) {
      return Date.now();
    }
  };
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({ "src/supporting/generated/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/generated/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/vendor-js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/supporting/img": "img" });

  eleventyConfig.addNunjucksFilter("is_string", function(obj) {
    return typeof obj === "string";
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
