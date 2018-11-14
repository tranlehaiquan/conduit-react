import React, { Component } from 'react';

export default class Errors extends Component {
  /**
   * Because server return Errors is Object
   * Example: {email: ['invalidate email type', 'to short'], password: 'invalidate password'}
   * Expect erros: ['email invalidate email', 'Email to short', 'pass invalidate password'];
   */
  renderErrors = () => {
    const { errors } = this.props;

    const errorItems = [];

    for(let key in errors) {
      errors[key].forEach((error) => {
        errorItems.push(`${key} ${error}`)
      });
    }

    return errorItems;
  }

  render() {
    const { errors } = this.props;

    if (!Object.keys(errors).length) return null;
  
    const listError = this.renderErrors();

    return (
      <ul className="error-messages">
        {listError.map((error) => (
          <li key={error}>{ error }</li>
        ))}
      </ul>
    );
  }
}
