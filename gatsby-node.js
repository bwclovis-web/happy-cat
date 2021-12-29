exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
  
    const {data} = await graphql(`
      {
        allShopifyProduct {
          nodes {
            id
            handle
            collections {
              handle
            }
          }
        }
        allShopifyCollection {
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
  
    data.allShopifyCollection.nodes.forEach(({ id, handle }) =>
      createPage({
        path: `/shop/${handle}`,
        component: require.resolve(`./src/templates/CategoryPage.js`),
        context: {
          id,
        },
      })
    );
  };