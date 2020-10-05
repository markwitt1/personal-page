import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { Typography } from "@material-ui/core";
import Layout from "../layouts/PageLayout";
interface DataType {
  allMdx: any;
}
const Blog = (props: PageProps<DataType>) => {
  console.log(props);
  const posts = props.data.allMdx.edges;
  return (
    <Layout>
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <Typography variant="h3">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/blog${node.fields.slug}`}
                >
                  {title}
                </Link>
              </Typography>
              <small></small>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
