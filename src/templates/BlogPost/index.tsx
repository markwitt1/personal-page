import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../../layouts/PageLayout";
import "./index.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CodeBlock from "./CodeBlock";

interface Props extends PageProps {
  data: {
    mdx: any;
    site: any;
  };
}

const BlogPostTemplate = (props: Props) => {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  return (
    <Layout>
      <div className="blogpost">
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`;
