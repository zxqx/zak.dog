import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';
import { Tag } from '../components/Tag';

const Container = styled.div`
  position: relative;
  margin-left: 20px;
  margin-bottom: 80px;
  padding: 20px 80px;
  border-left: 3px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 680px) {
    border-left: none;
    margin-left: 0;
    padding: 0 20px 0 0;
  }

  :before {
    position: absolute;
    top: 31px;
    left: -22px;
    content: '.';
    font-size: 70px;
    color: rgba(255, 255, 255, 0.7);

    @media (max-width: 680px) {
      display: none;
    }
  }
`;

const PostHeader = styled.div`
  margin-bottom: 40px;
`;

const PostFooter = styled.div`
  margin-top: 50px;
`;

const ListeningTo = styled.div`
  margin-bottom: 28px;
  line-height: 24px;
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
        tags
        listeningTo
      }
    }
  }
`;

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, listeningTo, tags } = frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <Animated>
        <Container>
          <PostHeader>
            <h1>{title}</h1>
            <h3>{date}</h3>
          </PostHeader>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <PostFooter>
            <ListeningTo>
              <b>Listening to</b>: <i>{listeningTo}</i>
            </ListeningTo>

            {tags.map((tag: string) => (
              <Tag tag={tag}>{tag}</Tag>
            ))}
          </PostFooter>
        </Container>
      </Animated>
    </Layout>
  );
};

export default Template;
