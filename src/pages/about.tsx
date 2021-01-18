import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";

const about = () => {
  return (
    <Layout>
      <h1>This is About page</h1>
      <h2>Material UI button</h2>
      <Button size="small" variant="contained" color="primary">
        Click
      </Button>
    </Layout>
  );
};

export default about;
