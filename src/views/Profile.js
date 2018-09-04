import React, {Component} from 'react';

export default class Profile extends Component {
  render() {
    return(
      <div classNames="profile-page">
        <div classNames="user-info">
          <div classNames="container">
            <div classNames="row">

              <div classNames="col-xs-12 col-md-10 offset-md-1">
                <img alt="Eric Simons" src="http://i.imgur.com/Qr71crq.jpg" classNames="user-img" />
                <h4>Eric Simons</h4>
                <p>
                  Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
                </p>
                <button classNames="btn btn-sm btn-outline-secondary action-btn">
                  <i classNames="ion-plus-round"></i>
                  &nbsp;
                  Follow Eric Simons 
                </button>
              </div>

            </div>
          </div>
        </div>

        <div classNames="container">
          <div classNames="row">

            <div classNames="col-xs-12 col-md-10 offset-md-1">
              <div classNames="articles-toggle">
                <ul classNames="nav nav-pills outline-active">
                  <li classNames="nav-item">
                    <a classNames="nav-link active" href="">My Articles</a>
                  </li>
                  <li classNames="nav-item">
                    <a classNames="nav-link" href="">Favorited Articles</a>
                  </li>
                </ul>
              </div>

              <div classNames="article-preview">
                <div classNames="article-meta">
                  <a href=""><img alt="Eric Simons" src="http://i.imgur.com/Qr71crq.jpg" /></a>
                  <div classNames="info">
                    <a href="" classNames="author">Eric Simons</a>
                    <span classNames="date">January 20th</span>
                  </div>
                  <button classNames="btn btn-outline-primary btn-sm pull-xs-right">
                    <i classNames="ion-heart"></i> 29
                  </button>
                </div>
                <a href="" classNames="preview-link">
                  <h1>How to build webapps that scale</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>

              <div classNames="article-preview">
                <div classNames="article-meta">
                  <a href=""><img alt="Eric Simons" src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                  <div classNames="info">
                    <a href="" classNames="author">Albert Pai</a>
                    <span classNames="date">January 20th</span>
                  </div>
                  <button classNames="btn btn-outline-primary btn-sm pull-xs-right">
                    <i classNames="ion-heart"></i> 32
                  </button>
                </div>
                <a href="" classNames="preview-link">
                  <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                  <ul classNames="tag-list">
                    <li classNames="tag-default tag-pill tag-outline">Music</li>
                    <li classNames="tag-default tag-pill tag-outline">Song</li>
                  </ul>
                </a>
              </div>


            </div>

          </div>
        </div>

      </div>
    )
  }
}
