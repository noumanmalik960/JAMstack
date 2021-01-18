import { Link } from "gatsby";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div style={{ margin: "30px" }}>
        <Link to="/app">App</Link> <Link to="/app/page1">Client2</Link>{" "}
        <Link to="/">Index</Link> <Link to="/about">About</Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
