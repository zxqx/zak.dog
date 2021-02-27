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

const CodePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allCodeYaml {
        edges {
          node {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
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

export default CodePage;
