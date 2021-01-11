import * as React from "react";
import Header from "../components/Header";
import { Link } from "gatsby";

const styles = {
  color: "navy",
};
const IndexPage = () => {
  return (
    <div>
      <h1 style={styles}>Hello from index page</h1>
      <Header text="This is a heading" subtext="This is a sub heading" />
      <Link to="/about/">About</Link>
    </div>
  );
};

export default IndexPage;
