import { Link } from "gatsby";
import React from "react";
import Button from "@material-ui/core/Button";

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
      <br />
      <br />
      <h2>Material UI button</h2>
      <Button size="small" variant="contained" color="primary">
        Click
      </Button>
    </div>
  );
};

export default Layout;
