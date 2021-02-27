import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';
import { PostTeasers, PostTeaserContent } from '../components/PostTeaser';

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

export const PostTeaser = styled(Link)`
  flex: 0 0 50%;
  margin-bottom: 50px;
  padding: 0 20px 20px 0;
  text-decoration: none;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    flex: 0 0 100%;
    padding-right: 0;
  }
`;

const MusicPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMusicYaml {
        edges {
          node {
            cid
            title
          }
        }
      }
    }
  `);

  const { edges } = data.allMusicYaml;

  return (
    <Layout>
      <SEO title="Music" />
      <Animated>
        <PostTeasers>
          {edges.map(edge => (
            <PostTeaser key={edge.node.cid} to={null}>
              <PostTeaserContent>
                <Iframe
                  src={`https://audius.co/embed/track?id=${edge.node.cid}&ownerId=102097&flavor=card`}
                  allow="encrypted-media"
                ></Iframe>
              </PostTeaserContent>
            </PostTeaser>
          ))}
        </PostTeasers>
      </Animated>
    </Layout>
  );
};

export default MusicPage;
