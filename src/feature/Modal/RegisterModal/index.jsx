import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import RegisterForm from '../../auth/RegisterForm';
import {closeModal} from '../modalActCreator';

const actions = {closeModal};

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Login to Re-vents
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(RegisterModal);