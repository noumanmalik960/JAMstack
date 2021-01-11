import React from "react";
import { Link } from "gatsby";

const ListLink = (props: { to: string; children: React.ReactNode }) => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout = ({ children }) => {
  return (
    <div style={{ margin: "3rem auto", maxWidth: 650, padding: "0 1rem" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <Link to="/">
          <h3 style={{ display: "inline" }}>MySweetSite</h3>
        </Link>
        <ul style={{ float: "right", listStyle: "none" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>

      {children}

      <footer
        style={{ position: "absolute", bottom: "10px", marginLeft: "100px" }}
      >
        This is footer
      </footer>
    </div>
  );
};

export default Layout;
