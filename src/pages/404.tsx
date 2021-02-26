import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>What once was here is no longer.</p>
  </Layout>
);

export default NotFoundPage;
