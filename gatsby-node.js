// This is for step 12 of the tutorial repo of bootcamp

exports.createPages = async function ({ graphql, actions }) {

  const query = await graphql(
    `
    query myQuery {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
            publishDate
            body {
              raw
            }
          }
        }
      }
    }
    
  `
  );
  // console.log(query);

  const posts = query.data.allContentfulBlogPost.edges;

  posts.map((post) => {
    actions.createPage({
      path: post.node.slug,
      component: require.resolve(`./src/templates/blog-post.tsx`),
      context: post.node,
    });
  })
}

















// //export async function createPages({ actions }) {
// // this is for the step06 of the JAMstack tutorial repo
// exports.createPages = async function ({ actions }) {


//   actions.createPage({
//     // this is the url path
//     path: 'my-dynamic-page',
//     // this is the path of the page which will be dynamically created
//     component: require.resolve('./src/templates/dynamic-page.tsx'),
//     context: {
//       // data we pass here will be available in the templage via pageContext prop (i-e pageContext.name)
//       name: 'Bashir',
//       age: 43
//     }
//   })
// }

// this is for the step07 of the JAMstack tutorial repo
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  // This below is regex meaning ^: starting with, and \/ means escaping '/' character and than 
  // 'app' so it will match all routes starting with 'app'
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}

