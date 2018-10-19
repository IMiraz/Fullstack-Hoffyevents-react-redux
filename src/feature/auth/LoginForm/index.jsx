
import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import TextInput from '../../../common/reduxForm/textInput';
import {login, socialLogin} from '../authActionsCreator'
import SocialLogin from '../SocialLogin'

const  actions = {
  login,
  socialLogin
}
const LoginForm = ({login, handleSubmit, error, socialLogin}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color='red'>{error}</Label> }
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>
          or
        </Divider>
        <SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form:'loginForm'})(LoginForm));