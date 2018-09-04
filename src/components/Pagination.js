import React, {Component} from 'react';

export default class Pagination extends Component {
  render() {
    return(
      <nav>
        <ul class="pagination">
          <li class="page-item disabled">
            <a href="" class="page-link">Previous</a>
          </li>
          <li class="page-item active">
            <a href="" class="page-link">1</a>
          </li>
          <li class="page-item">
            <a href="" class="page-link">2</a>
          </li>
          <li class="page-item">
            <a href="" class="page-link">3</a>
          </li>
          <li class="page-item">
            <a class="page-link">...</a>
          </li>
          <li class="page-item">
            <a href="" class="page-link">71</a>
          </li>
          <li class="page-item">
            <a href="" class="page-link">Next</a>
          </li>
        </ul>
      </nav>
    )
  }
}
