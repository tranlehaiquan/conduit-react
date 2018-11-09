import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageDotItem = (
  <span
    className="page-link" 
    onClick={(e) => e.preventDefault()}
  >
    ...
  </span>
);

/**
 * TODO
 * Maybe pagiation link href
 * can caculate base on query
 * Like https://localhost:3000/?page=3&tag=hello
 * -> Previous: href https://localhost:3000/?page=2&tag=hello
 * -> Next: href https://localhost:3000/?page=2&tag=hello
 * Auto with page number n -> https://localhost:3000/?page=n&tag=hello
 */

export default class Pagination extends Component {
  static propTypes = {
    current: PropTypes.number,
    pageCount: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    current: 1,
    pageCount: 10,
    onChange: undefined
  };

  pagination = () => {
    let current = this.props.current;
    let last = this.props.pageCount
    let delta = 3
    let left = current - delta
    let right = current + delta + 1
    let range = []
    let rangeWithDots = []
    let l

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i)
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (i - l !== 1) {
          rangeWithDots.push('...')
        }
      }
      rangeWithDots.push(i)
      l = i
    }

    return rangeWithDots
  }

  goNextPage = (e) => {
    this.props.onChange(this.props.current + 1);
    e.preventDefault();
  }

  goPreviousPage = (e) => {
    this.props.onChange(this.props.current - 1);
    e.preventDefault();
  }

  renderPageItem = (page) => {
    const { onChange } = this.props;
    return (
      <a href={page} className="page-link"
        onClick={(e) => {
          onChange(page);
          e.preventDefault();
        }}>
        { page }
      </a>
    )
  }

  renderPagination = () => {
    const pages = this.pagination();
    const { current } = this.props;

    const pageItems = pages.map((page, index) => {
      const itemStyle = classnames('page-item', current === page && 'active');
        return (
          <li className={itemStyle} key={page + index}>
            {
              page !== '...'
              ? this.renderPageItem(page)
              : PageDotItem
            }
          </li>
        );
    });

    return pageItems;
  }
  
  render() {
    const isFirst = this.props.current === 1;
    const isLast = this.props.current === this.props.pageCount;

    return(
      <nav>
        <ul className="pagination">
          <li className={classnames("page-item", isFirst && 'disabled')}>
            <a 
              onClick={this.goPreviousPage}
              href=""
              className="page-link">
              Previous
            </a>
          </li>
          {
            this.renderPagination()
          }
          <li className={classnames("page-item", isLast && 'disabled')}>
            <a 
              onClick={this.goNextPage}
              href=""
              className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
