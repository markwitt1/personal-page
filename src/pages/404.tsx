import React from "react";
import SEO from "../components/SEO";
import Layout from "../layouts/PageLayout";

interface Props {}

const CVPage = () => {
  return (
    <>
      <SEO title="404" />
      <Layout>Page not found :(</Layout>
    </>
  );
};

export default CVPage;
