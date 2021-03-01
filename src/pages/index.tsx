import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';
import { Paragraph } from '../components/Paragraph';
import { Tag } from '../components/Tag';
import {
  PostTeasers,
  PostTeaser,
  PostTeaserContent,
  PostTeaserHeading,
  PostTeaserTags,
} from '../components/PostTeaser';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              slug
              title
              tags
            }
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Blog" />
      <Animated>
        <PostTeasers>
          {edges.map(edge => (
            <PostTeaser to={edge.node.frontmatter.slug}>
              <PostTeaserContent height={330}>
                <PostTeaserHeading>
                  {edge.node.frontmatter.title}
                </PostTeaserHeading>
                <Paragraph>
                  {edge.node.internal.content
                    .replace(/\*/g, '')
                    .replace(/_/g, '')
                    .slice(
                      0,
                      edge.node.frontmatter.title.length > 25 ? 190 : 210
                    )}
                  <span>...</span>
                </Paragraph>

                <PostTeaserTags>
                  {edge.node.frontmatter.tags.map((tag: string) => (
                    <Tag key={tag} tag={tag}>
                      {tag}
                    </Tag>
                  ))}
                </PostTeaserTags>
              </PostTeaserContent>
            </PostTeaser>
          ))}
        </PostTeasers>
      </Animated>
    </Layout>
  );
};

export default IndexPage;
