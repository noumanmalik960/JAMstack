import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";

export default ({ pageContext }) => {
  return (
    <Layout>
      <div
        style={{ margin: "20px", border: "1px solid black", padding: "20px" }}
      >
        <h2>This is the dynamically created blog-post page</h2>
        <div>{pageContext.title}</div>

        <br />
        <div>
          <span>
            <i> Body: </i>
          </span>
          {documentToReactComponents(JSON.parse(pageContext.body.raw))}
        </div>
      </div>
    </Layout>
  );
};
