import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const styles = {
  color: "navy",
};
const IndexPage = ({ data }) => {
  // console.log("this is the data: ", data);
  const posts = data.allContentfulBlogPost.edges.map((post, index) => (
    <li key={index}>
      <Link to={post.node.slug}>{post.node.title}</Link>
    </li>
  ));

  return (
    <Layout>
      <h3 style={styles}>
        These are the posts fetched from contentful using graphql
      </h3>
      {posts}
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          publishDate(formatString: "d-m-y")
          body {
            raw
          }
        }
      }
    }
  }
`;

export default IndexPage;
