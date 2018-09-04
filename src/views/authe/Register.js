import React, {Component} from 'react';

export default class Register extends Component {
  render() {
    return(
      <div class="auth-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign up</h1>
              <p class="text-xs-center"><a href="/login" class="">Have an account?</a></p>
              <ul class="error-messages"></ul>
              <form>
                <fieldset class="form-group"><input type="text" placeholder="Your Name" class="form-control form-control-lg"/></fieldset>
                <fieldset class="form-group"><input type="text" placeholder="Email" class="form-control form-control-lg"/></fieldset>
                <fieldset class="form-group"><input type="password" placeholder="Password" class="form-control form-control-lg"/></fieldset><button
                  class="btn btn-lg btn-primary pull-xs-right">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
