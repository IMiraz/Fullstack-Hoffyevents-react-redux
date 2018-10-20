
import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import DateInput from "../../../../common/reduxForm/DateInput";
import PlaceInput from "../../../../common/reduxForm/googlePlaceInput";
import TextInput from "../../../../common/reduxForm/textInput";
import RadioInput from "../../../../common/reduxForm/RadioInput"

class BasicsPage extends Component {

    render() {
        const {pristine, submitting} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
                <Form>
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Form.Group inline>
                    <Field
                    name='gender'
                    type='radio'
                    value='male'
                    label='Male'
                    component={RadioInput}
                    />
                    <Field
                    name='gender'
                    type='radio'
                    value='female'
                    label='Female'
                    component={RadioInput}
                    />
                    </Form.Group>
                    <Field
                        width={8}
                        name='dateOfBirth'
                        component={DateInput}
                        placeholder='Date of Birth'
                    />
                    <Field
                        name='city'
                        placeholder='Home Town'
                        options={{types: ['(cities)']}}
                        label='Female'
                        component={PlaceInput}
                        width={8}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({form: 'userProfile', enableReinitialize:true })(BasicsPage);