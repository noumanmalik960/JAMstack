exports.createPages = async function ({ actions }) {

  actions.createPage({
    path: 'my-dynamic-page',
    component: require.resolve('./src/templates/dynamic-page.tsx'),
    context: {
      // data we pass here will be available in the templage via pageContext prop
      name: 'Bashir'
    }
  })
}