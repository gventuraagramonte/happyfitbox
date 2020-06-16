import React from "react";
import Layout from "../components/layout/layout";
import Footer from "../components/layout/Footer";
import ContentMain from "../components/layout/ContentMain";

const Home = () => {
  return (
    <div className="container">
      <Layout>
        <ContentMain />
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
