exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
  
    const {
      data
    } = await graphql(`
      {
        allShopifyProduct {
          nodes {
            id
            handle
          }
        }
      }
    `);
  
    data.allShopifyProduct.nodes.forEach(({ id, handle }) =>
      createPage({
        path: `/shop/${handle}`,
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