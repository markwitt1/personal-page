import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../layouts";

interface Props {}

const AboutPage = () => {
  return (
    <Layout>
      <Typography variant="h4">About me</Typography>
      <Typography>
        I am a Software Engineer who is very passionate about modern
        technologies. I am a very fast and practical learner.
      </Typography>
    </Layout>
  );
};

export default AboutPage;
