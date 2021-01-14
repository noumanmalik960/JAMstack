import { Link } from "gatsby";
import React from "react";

export default ({ pageContext }) => {
  return (
    <div>
      <div>This is dynamic page created by {pageContext.name}</div>
      <div>
        {pageContext.name} is {pageContext.age} year old
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};
