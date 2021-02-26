import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';
import {
  PostTeasers,
  PostTeaser,
  PostTeaserContent,
} from '../components/PostTeaser';

const Iframe = styled.iframe`
  width: 100%;
  height: 480px;
  border: none;
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
