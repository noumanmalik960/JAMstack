import React from "react";
import { Router } from "@reach/router";
import Client1 from "../components/Client1";
import DefaultClient from "../components/DefaultClient";
import Layout from "../components/Layout";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Client1 path="/page1" />
        <DefaultClient path="/" />
      </Router>
    </Layout>
  );
};

export default App;
