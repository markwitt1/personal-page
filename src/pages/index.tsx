import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../layouts/PageLayout";
import SEO from "../components/SEO";

interface Props {}

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Typography variant="h4">About me</Typography>
      <Typography>
        I am a Software Engineer who is very passionate about modern
        technologies. The exponential growth of technological advances will
        offer us a lot of opportunities in the future and I want to be a part of
        that.
      </Typography>
      <Typography>
        I have a professional experience building modern web applications using
        React and TypeScript + Amazon Web Services
      </Typography>
    </Layout>
  );
};

export default AboutPage;
