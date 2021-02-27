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
  display: flex;
  width: auto;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 480px;
  border: none;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 600px) {
    height: 500px;
  }

  @media (max-width: 500px) {
    height: 400px;
  }

  @media (max-width: 400px) {
    height: 300px;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    musicYaml(slug: { eq: $slug }) {
      cid
      title
    }
  }
`;

const Template = ({ data }) => {
  const { musicYaml } = data;
  const { title, cid } = musicYaml;

  return (
    <Layout>
      <SEO title={title} />
      <Animated>
        <Container>
          <Iframe
            src={`https://audius.co/embed/track?id=${cid}&ownerId=102097&flavor=card`}
            allow="encrypted-media"
          ></Iframe>
        </Container>
      </Animated>
    </Layout>
  );
};

export default Template;
