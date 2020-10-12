import React from "react";
import { graphql, PageProps } from "gatsby";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Layout from "../layouts/PageLayout";
import SEO from "../components/SEO";
import Link from "../components/Link";
interface DataType {
  allMdx: any;
}

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: "none",
  },
});

const Blog = (props: PageProps<DataType>) => {
  console.log(props);
  const posts = props.data.allMdx.edges;
  const s = useStyles();

  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(
        ({ node }) =>
          node.frontmatter.published && (
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {node.frontmatter.date}
                </Typography>
                <Typography variant="h5" component="h2">
                  {node.frontmatter.title}
                </Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">
                  {node.frontmatter.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={s.buttonLink}
                  to={`/blog${node.fields.slug}`}
                  component={Link}
                  underline="none"
                >
                  Read
                </Button>
              </CardActions>
            </Card>
          )
        /*             const title = node.frontmatter.title || node.fields.slug;
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
            ); */
      )}
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
            date
            published
            devtolink
          }
        }
      }
    }
  }
`;
