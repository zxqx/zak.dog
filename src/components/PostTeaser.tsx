import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostTeasers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PostTeaser = styled(Link)`
  flex: 0 0 50%;
  margin-bottom: 50px;
  padding: 0 20px 20px 0;
  text-decoration: none;

  @media (max-width: 1024px) {
    flex: 0 0 100%;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const PostTeaserContent = styled.div<{ height?: number }>`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding-bottom: 25px;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    padding-bottom: 20px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const PostTeaserHeading = styled.h2`
  margin-bottom: 22px;
  line-height: 36px;
`;

export const PostTeaserTags = styled.div`
  margin-top: auto;
`;
