import React from "react";
import SEO from "../components/SEO";
import Layout from "../layouts/PageLayout";

interface Props {}

const CVPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      Page not found :(
    </Layout>
  );
};

export default CVPage;
