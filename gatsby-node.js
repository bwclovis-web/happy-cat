exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
  
    const {
      data: { allChecProduct },
    } = await graphql(`
      {
        allChecProduct {
          nodes {
            id
            permalink
          }
        }
  
        allChecCategory {
          nodes {
            id
            slug
          }
        }
      }
    `);
  
    allChecProduct.nodes.forEach(({ id, permalink }) =>
      createPage({
        path: `/shop/${permalink}`,
        component: require.resolve(`./src/templates/ProductTemplate.jsx`),
        context: {
          id,
        },
      })
    );
  
    // allChecCategory.nodes.forEach(({ id, slug }) =>
    //   createPage({
    //     path: `/categories/${slug}`,
    //     component: require.resolve(`./src/templates/CategoryPage.js`),
    //     context: {
    //       id,
    //     },
    //   })
    // );
  };