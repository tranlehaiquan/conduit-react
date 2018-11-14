import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cleanUser } from '../store/actions';

const Auth = connect(
  ({auth}) => ({
    auth
  }),
  (dispatch) => ({
    logout: () => {
      dispatch(cleanUser())
    }
  })
)(function Auth(props) {
  const { email } = props.auth;
  return (
    email ? (
      props.renderLoggedIn(props)
    ) : (
      props.renderLoggedOut(props)
    )
  )
});

Auth.propTypes = {
  renderLoggedIn: PropTypes.func.isRequired,
  renderLoggedOut: PropTypes.func.isRequired
}

export default Auth;
