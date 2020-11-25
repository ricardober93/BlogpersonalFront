const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query Allblog {
      allStrapiBlog {
        nodes {
          id
          title
          content
          publishAt
          imagen{
            publicURL
          }
          SEO{
            MetaDescription
            MetaTitle
            }
          slug
          categoria{
            name
               }
          autor{
            name
            picture {
                publicURL
                    }
            }
        }
      }
    }
  `);
  const blogTemplate = path.resolve(`src/templates/blog-templates.js`);
  queryResults.data.allStrapiBlog.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.id}`,
      component: blogTemplate,
      context: {
        // This time the entire product is passed down as context
        blog: node
      }
    });
  });
};
