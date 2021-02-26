import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface Props {
  siteTitle: string;
}

const Container = styled.header`
  margin: 0 auto;
  padding: 64px 20px 80px;
  max-width: 960px;
`;

const Logo = styled(Link)`
  color: #e2e2f3;
  font-size: 28px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.5px;
  text-decoration: none;
`;

const Separator = styled.div`
  :after {
    color: #e2e2f3;
    font-weight: 600;
    content: '_';
  }
`;

export const Header = ({ siteTitle }: Props) => (
  <Container>
    <Logo to="/">
      {siteTitle}

      <Separator />
    </Logo>
  </Container>
);
