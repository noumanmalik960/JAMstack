import { Link } from "gatsby";
import React from "react";

export default ({ pageContext }) => {
  return (
    <div>
      <div>This is dynamic page created by {pageContext.name}</div>
      <Link to="/">Home</Link>
    </div>
  );
};
