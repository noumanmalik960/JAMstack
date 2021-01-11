import * as React from "react";
import Layout from "../components/layout";

const styles = {
  color: "navy",
};
const Home = () => {
  return (
    <Layout>
      <h1 style={styles}>
        Hello I'm building a fake gatsby site as part of a tutorial
      </h1>
      <p>
        What do I like to do? lots of course but mostyly I build websites and I
        also like to play Football that is very close to my heart
      </p>
    </Layout>
  );
};

export default Home;
