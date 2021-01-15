import * as React from "react";
import Header from "../components/Header";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const styles = {
  color: "navy",
};
const IndexPage = () => {
  return (
    <Layout>
      <h1 style={styles}>Hello from index page</h1>
      <Header text="This is a heading" subtext="This is a sub heading" />
      <Link to="/about/">About</Link>
      <br />
      <Link to="/my-dynamic-page">Dynamic page</Link>
      <br />
    </Layout>
  );
};

export default IndexPage;
