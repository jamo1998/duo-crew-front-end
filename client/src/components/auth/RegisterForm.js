import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RankSelect from '../RankSelect';
import RoleSelect from '../RoleSelect';
import SecondaryRoleSelect from '../SecondaryRoleSelect';

class RegisterForm extends React.Component {
  showInput = (formProps) => {
    // console.log(formProps.meta);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.showError(formProps.meta)}
      </div>
    );
  };

  showPasswordInput = (formProps) => {
    // console.log(formProps.meta);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input type="password" {...formProps.input} autoComplete="off" />
        {this.showError(formProps.meta)}
      </div>
    );
  };

  showRankSelect = (formProps) => {
    // console.log(formProps.meta);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <RankSelect />
        {this.showError(formProps.meta)}
      </div>
    );
  };

  showRoleSelect = (formProps) => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <RoleSelect />
        {this.showError(formProps.meta)}
      </div>
    );
  };

  showSecondaryRoleSelect = (formProps) => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <SecondaryRoleSelect />
        {this.showError(formProps.meta)}
      </div>
    );
  };

  showError(formProps) {
    if (formProps.error && formProps.touched) {
      return (
        <div className="ui error message">
          <div className="header">{formProps.error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error container"
      >
        <h3>Create an Account</h3>
        <Field
          name="summonerName"
          component={this.showInput}
          label="Summoner Name"
        />
        <Field
          name="password"
          component={this.showPasswordInput}
          label="Password"
        />
        <Field
          name="password2"
          component={this.showPasswordInput}
          label="Confirm Password"
        />

        <Field
          name="currentRank"
          component={this.showRankSelect}
          label="Current Rank"
        />

        <Field
          name="mainRole"
          component={this.showRoleSelect}
          label="Main Role"
        />

        <Field
          name="secondaryRole"
          component={this.showSecondaryRoleSelect}
          label="Secondary Role"
        />

        <br />
        <button className="ui button primary">Register</button>
      </form>
    );
  }
}

// form validation
const validate = (formValues) => {
  const errors = {};
  if (!formValues.summonerName) {
    errors.summonerName = 'Enter a Summoner Name';
  }

  if (!formValues.password) {
    errors.password = 'Enter a password';
  }

  if (formValues.password !== formValues.password2) {
    errors.password = 'Passwords do not match';
    errors.password2 = 'Passwords do not match';
  }

  if (!formValues.currentRank) {
    errors.currentRank = 'Select a rank';
  }

  if (!formValues.mainRole) {
    errors.mainRole = 'Select a main role';
  }

  if (!formValues.secondaryRole) {
    errors.secondaryRole = 'Select a secondary role';
  }
  // if errors object is empty, redux-form will assume there are no errors
  return errors;
};

export default reduxForm({
  form: 'registerForm',
  validate: validate,
})(RegisterForm);
