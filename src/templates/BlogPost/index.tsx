import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../../components/seo";
import Layout from "../../layouts";
import "./index.scss";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

interface Props extends PageProps {
  data: {
    mdx: any;
    site: any;
  };
  pageContext: {
    previous: any;
    next: any;
  };
}
const BlogPostTemplate = (props: Props) => {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout>
      <div className="blogpost">
        <h1>{post.frontmatter.title}</h1>

        <MDXRenderer
          components={{
            h1: Typography,

            a: Link,
          }}
        >
          {post.body}
        </MDXRenderer>
        {/*         <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
          
        </ul> */}
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
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
      }
    }
  }
`;
