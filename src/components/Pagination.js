import React, {Component} from 'react';

export default class Pagination extends Component {
  render() {
    return(
      <nav>
        <ul className="pagination">
          <li className="page-item disabled">
            <a href="" className="page-link">Previous</a>
          </li>
          <li className="page-item active">
            <a href="" className="page-link">1</a>
          </li>
          <li className="page-item">
            <a href="" className="page-link">2</a>
          </li>
          <li className="page-item">
            <a href="" className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link">...</a>
          </li>
          <li className="page-item">
            <a href="" className="page-link">71</a>
          </li>
          <li className="page-item">
            <a href="" className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    )
  }
}
