import React from 'react';
import { parseQueryString, getDisplayName } from '../utils/index';

function withParseQuery(WrapComponent) {
  class WithParseQuery extends React.PureComponent {
    render() {
      const queryString = parseQueryString(window.location.search);

      return <WrapComponent {...this.props} queryString={queryString}/>
    }
  }

  WithParseQuery.displayName = `WithParseQuery-${getDisplayName(WrapComponent)}`;

  return WithParseQuery;
}

export default withParseQuery;
