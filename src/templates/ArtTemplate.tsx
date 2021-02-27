import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';

const Container = styled.div`
  margin-bottom: 50px;
  padding-bottom: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Image = styled(Img)`
  margin-bottom: 30px;
`;

export const pageQuery = graphql`
  query($cid: String!) {
    artYaml(cid: { eq: $cid }) {
      cid
      title
      image {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Template = ({ data }) => {
  const { artYaml } = data;
  const { title, image } = artYaml;

  return (
    <Layout>
      <SEO title={title} />
      <Animated>
        <Container>
          <Image fluid={image.childImageSharp.fluid} alt={title} />

          <h1>{title}</h1>
        </Container>
      </Animated>
    </Layout>
  );
};

export default Template;
