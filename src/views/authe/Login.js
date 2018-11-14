import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userLogin } from '../../api';
import Errors from '../../components/Errors';
import { setUser } from '../../store/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
      errors: {}
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
    e.preventDefault();
    e.persist(); // place here beacause after async e is gone
    const { email, password } = this.state;
    const { setUser } = this.props;
    try {
      this.setLoading(true);
      const { data } = await userLogin(email, password);
      setUser(data.user);
      this.props.history.push('/');
    } catch ({response}) {
      // turn loading off
      this.setLoading(false);
      this.setState(() => ({
        errors: response.data.errors
      }))
    }
  }

  /**
   * @param {Boolean} loadingState 
   */
  setLoading = (loadingState) => {
    this.setState({
      loading: loadingState
    })
  }

  render() {
    const { email, password, errors, loading } = this.state;

    return(
      <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <Errors errors={errors}/>
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
                  disabled={loading}
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
                  disabled={loading}
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

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => {
    dispatch(setUser(user))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
