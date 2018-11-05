import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTags } from '../store/actions';

class Tags extends PureComponent {
  static propTypes = {
    fetchTags: PropTypes.func,
    tags: PropTypes.array,
  }
  
  static defaultProps = {
    fetchTags: null,
    tags: []
  }

  renderTags = () => {
    const tags = this.props.tags.map((tag) => {
      return(
        <Link key={tag} to={`tag/${tag}`} className="tag-pill tag-default">
          { tag }
        </Link>
      );
    });
    return tags;
  }

  async componentDidMount() {
    await this.props.fetchTags();
  }

  render() {
    return(
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          { this.renderTags() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ home }) => ({
  tags: home.tags,
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => {
    dispatch(fetchTags());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Tags);
