import React from 'react';
import{connect} from 'react-redux'
import { Form, Segment, Button,Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {combineValidators, isRequired} from 'revalidate'
import TextInput from '../../../common/reduxForm/textInput';
import {registerUser} from '../authActionsCreator';
import SocialLogin from '../SocialLogin'

const actions = {
   registerUser
}

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email:isRequired('email'),
  password:isRequired('password')

})

const RegisterForm = ({ registerUser, handleSubmit, error, invalid, submiting}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
            {error && <Label basic color='red'>{error}</Label>}
          <Button disabled={invalid || submiting} fluid size="large" color="teal">
            Register
          </Button>
          <Divider horizontal>
          or
        </Divider>
        <SocialLogin/>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions) (reduxForm({form:'registerForm', validate})(RegisterForm));