import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return(
      <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <ul className="error-messages"></ul>
            <form>
              <fieldset className="form-group">
                <input type="text" placeholder="Email" className="form-control form-control-lg"/>
              </fieldset>
              <fieldset className="form-group">
                <input type="password" placeholder="Password" className="form-control form-control-lg"/>
              </fieldset>
              <button
                type="" 
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
