import React from 'react';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div className="inner outer">
                    <article className="post post-full">
                        <h1> Error 404</h1>
                    </article>
                </div>
            </Layout>
        );
    }
}
