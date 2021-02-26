exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(
    `./src/templates/BlogPostTemplate.tsx`
  );
  const tagsTemplate = require.resolve('./src/templates/TagsTemplate.tsx');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
