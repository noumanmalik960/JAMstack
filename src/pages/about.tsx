import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <h1>This is About page</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default about;
