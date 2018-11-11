import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { userLogin } from '../../api';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
      erros: {}
    }
  }

  onchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  onSubmit = async (e) => {
    console.log(e.preventDefault);
    e.preventDefault();
    e.persist(); // place here beacause after async e is gone
    const { email, password } = this.state;
    try {
      await userLogin(email, password);
    } catch (error) {
      console.log('error', error);
    }
    console.log(e.preventDefault);
    e.preventDefault();
  }

  render() {
    const { email, password } = this.state;

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
            <form onSubmit={this.onSubmit}>
              <fieldset className="form-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  className="form-control form-control-lg"
                  value={email}
                  onChange={this.onchange}
                  required
                />
              </fieldset>
              <fieldset className="form-group">
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  className="form-control form-control-lg"
                  value={password}
                  onChange={this.onchange}
                  required
                />
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
