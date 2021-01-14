import { Link } from "gatsby";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <br />
      <Link to="/app">App</Link>
      <br />
      <Link to="/app/page1">Client2</Link>
      <br />
      <Link to="/">Index</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Layout;
