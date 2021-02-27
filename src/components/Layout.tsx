import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { lighten } from 'polished';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header';
import { colors } from '../constants/colors';
import curls from '../images/curls.png';
import './fonts.css';

interface Props {
  children: React.ReactNode;
  width?: number;
}

const Root = styled.div`
  min-height: 100vh;
  background: url('${curls}');
`;

const Container = styled.div`
  padding-left: 80px;
  min-height: 100vh;
  background: radial-gradient(rgba(11, 12, 29, 0.55) 0%, ${colors.primary} 50%)
    340px -200px;
  color: ${lighten(0.83, colors.primary)};

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Content = styled.div<Pick<Props, 'width'>>`
  position: relative;
  top: -20px;
  margin: 0 auto;
  padding: 0 20px 60px;
  max-width: ${({ width }) => width}px;
`;

const Footer = styled.footer`
  margin-top: 20px;
`;

export const Layout = ({ children, width = 960 }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Root>
      <GlobalStyle />
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title} />
        <Content width={width}>
          <main>{children}</main>
          <Footer>© zak.dog</Footer>
        </Content>
      </Container>
    </Root>
  );
};
