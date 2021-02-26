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

const ArtPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allArtYaml {
        edges {
          node {
            cid
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allArtYaml;

  return (
    <Layout>
      <SEO title="Art" />
      <Animated>
        <PostTeasers>
          {edges.map(edge => (
            <PostTeaser key={edge.node.cid} to={`/art/${edge.node.cid}`}>
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

export default ArtPage;
