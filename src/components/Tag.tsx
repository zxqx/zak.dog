import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '../constants/colors';

interface Props {
  tag: string;
  children: React.ReactNode;
}

const Container = styled.span`
  margin-right: 8px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  background: ${colors.accent};
`;

const TagLink = styled(Link)`
  color: #10112d;
  text-decoration: none;
`;

export const Tag = ({ tag, children }: Props) => (
  <Container>
    <TagLink to={`/tags/${tag}`}>{children}</TagLink>
  </Container>
);
