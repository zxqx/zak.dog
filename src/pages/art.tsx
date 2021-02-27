import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';
import {
  PostTeasers,
  PostTeaser,
  PostTeaserContent,
  PostTeaserHeading,
} from '../components/PostTeaser';

const Image = styled(Img)`
  margin-bottom: 20px;
`;

const ArtPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allArtYaml {
        edges {
          node {
            cid
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
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
            <PostTeaser key={edge.node.cid} to={`/a/${edge.node.cid}`}>
              <PostTeaserContent>
                <Image
                  fluid={edge.node.image.childImageSharp.fluid}
                  alt={edge.node.title}
                />
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
