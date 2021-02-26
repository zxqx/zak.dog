import React from 'react';
import { Link, graphql } from 'gatsby';
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

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`;

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title={tag} />
      <Animated>
        <PostTeasers>
          {edges.map(edge => (
            <PostTeaser key={edge.node.id} to={edge.node.frontmatter.slug}>
              <PostTeaserContent>
                <PostTeaserHeading>
                  {edge.node.frontmatter.title}
                </PostTeaserHeading>
                <Paragraph>
                  {edge.node.internal.content.slice(
                    0,
                    edge.node.frontmatter.title.length > 25 ? 190 : 210
                  )}
                  ...
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

export default Tags;
