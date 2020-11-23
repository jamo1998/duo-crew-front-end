import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RankSelect from '../RankSelect';

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

  showSelectInput = (formProps) => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <select className="ui fluid dropdown">
          <option value=""></option>
          <option value="bot">Bot</option>
          <option value="support">Support</option>
          <option value="mid">Mid</option>
          <option value="jungle">Jungle</option>
          <option value="top">Top</option>
        </select>
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

        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <div>
                <Field
                  name="mainRole"
                  component={this.showSelectInput}
                  className="ui fluid dropdown"
                  label="Main Role"
                ></Field>
              </div>
            </div>

            <div className="column">
              <div>
                <Field
                  name="secondaryRole"
                  component={this.showSelectInput}
                  className="ui fluid dropdown"
                  label="Secondary Role"
                ></Field>
              </div>
            </div>
          </div>
        </div>

        <button className="ui button primary">Submit</button>
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

  if (!formValues.mainRole || !formValues.secondaryRole) {
    errors.mainRole = 'Select a main role';
    errors.secondaryRole = 'Select a secondary role';
  }
  // if errors object is empty, redux-form will assume there are no errors
  return errors;
};

export default reduxForm({
  form: 'registerForm',
  validate: validate,
})(RegisterForm);
