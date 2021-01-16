import React from "react";
import { Link } from "gatsby";

const About = () => {
  const styles = {
    color: "navy",
  };
  return (
    <div>
      <h1 style={styles}>This is About page</h1>
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default About;
