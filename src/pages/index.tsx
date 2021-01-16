import * as React from "react";
import { graphql, Link } from "gatsby";

const styles = {
  color: "navy",
};
const IndexPage = ({ data }) => {
  // console.log(data);
  // const finalData = data.allContentfulBlogPost.edges[0].node.body;
  // const dataa = JSON.parse(finalData);
  // console.log(dataa);

  return (
    <div>
      <h1 style={styles}>This is the Title</h1>
      <h2>Here is the data fetched from Contentful</h2>
      {data.allContentfulBlogPost.edges[0].node.title}
      <br />
      {data.allContentfulBlogPost.edges[0].node.publishDate}
      <br />
      {data.allContentfulBlogPost.edges[0].node.body.raw}
      <hr />
      {JSON.stringify(data.allContentfulBlogPost.edges[0].node.body.raw)}
      {/* {documentToReactComponents(dataa)} */}
      <br />
      <h3>
        <Link to="/about">About</Link>
      </h3>
    </div>
    
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
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
