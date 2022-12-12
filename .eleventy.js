module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("script.js");

    return {

        templateFormats: ["njk", "html", "md"],
        
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk", 
    }
};