import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';
import {
  PostTeasers,
  PostTeaser,
  PostTeaserContent,
  PostTeaserHeading,
} from '../components/PostTeaser';

const CodePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allCodeYaml {
        edges {
          node {
            title
            image {
              publicURL
            }
            url
          }
        }
      }
    }
  `);

  const { edges } = data.allCodeYaml;

  return (
    <Layout>
      <SEO title="Code" />
      <Animated>
        <PostTeasers>
          {edges.map(edge => (
            <PostTeaser key={edge.node.title} to={edge.node.url}>
              <PostTeaserContent>
                <img src={edge.node.image.publicURL} alt={edge.node.title} />
                <PostTeaserHeading>{edge.node.title}</PostTeaserHeading>
              </PostTeaserContent>
            </PostTeaser>
          ))}
        </PostTeasers>
      </Animated>
    </Layout>
  );
};

export default CodePage;
