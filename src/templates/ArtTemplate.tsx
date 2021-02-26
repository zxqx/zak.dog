import React from 'react';
import { graphql } from 'gatsby';
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

export const pageQuery = graphql`
  query($cid: String!) {
    artYaml(cid: { eq: $cid }) {
      cid
      title
      image {
        publicURL
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
          <img src={image.publicURL} alt={title} />

          <h1>{title}</h1>
        </Container>
      </Animated>
    </Layout>
  );
};

export default Template;
