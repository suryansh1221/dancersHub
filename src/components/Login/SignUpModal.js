import React, { Component } from 'react'
import { Button, Modal, Form, Dropdown, Icon } from "semantic-ui-react";

export class SignUpModal extends Component {
    state = {openState: false, startDate: null, endDate: null,value: ''}
    
    handleChange = date => {
        this.setState({
          startDate: date
        });
    };
    handleChange3 = date => {
        this.setState({
          endDate: date
        });
    };
    handleChange2 = (e, value) => {
        this.setState({
          value: e.target.value
        });
    };
    componentDidMount(){
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.setState({openState: nextProps.openState})
    }
    render() {
        const options = [
            { key: 1, text: 'Battle', value: 1 },
            { key: 2, text: 'Workshop', value: 2 },
            { key: 3, text: 'Competition', value: 3 }
        ]
        const stylesOptions = [
            { key: 1, text: 'House', value: 1 },
            { key: 2, text: 'popping', value: 2 },
            { key: 3, text: 'locking', value: 3 },
            { key: 4, text: 'hip hop', value: 4 },
            { key: 5, text: 'animation', value: 5 },
            { key: 6, text: 'wacking', value: 6 }
        ]
        return (
            <Modal size='small' open={this.state.openState} onClose={this.close} closeOnDimmerClick={true} >
                <Modal.Header> User Signup </Modal.Header>
                <Modal.Content>
                    <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                                label='First Name'
                                control='input'
                                placeholder=''
                        />
                        <Form.Field
                                label='Last Name'
                                control='input'
                                placeholder=''
                        /> 
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field required
                                label='Email'
                                control='input'
                                placeholder=''
                        />
                        <Form.Field required
                                label='Dance Handle'
                                control='input'
                                placeholder='e.g. fikshun'
                        /> 
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field required label='Password' control='input' type='password'/>
                        <Form.Field required label='Confirm Password' control='input' type='password'/>
                    </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative  onClick={()=>this.setState({openState: false})}>  <Icon name='remove' />Close</Button>
                    <Button
                    positive
                    icon='checkmark'
                    content='Create'
                    />
                </Modal.Actions>
                
            </Modal>
        )
    }
}

export default SignUpModal
