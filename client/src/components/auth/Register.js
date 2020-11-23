import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';

class Register extends React.Component {
  state = {
    summonerName: '',
    password: '',
    currentRank: '',
    mainRole: '',
    secondaryRole: '',
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
  };

  onSubmit = (formValues) => {
    this.props.registerUser(formValues);
  };

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { registerUser })(Register);
