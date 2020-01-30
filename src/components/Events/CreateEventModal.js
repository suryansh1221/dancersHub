import React, { Component } from 'react'
import { Button, Modal, Form } from "semantic-ui-react";
import { openModal } from "../../actions/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class CreateEventModal extends Component {
    state = {openState: false, startDate: new Date()}
    handleChange = date => {
        this.setState({
          startDate: date
        });
    };
    componentDidMount(){
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.setState({openState: nextProps.openState})
    }
    render() {
        return (
            <Modal size='small' open={this.state.openState} onClose={this.close} closeOnDimmerClick={true}>
                <Modal.Header> Create Event </Modal.Header>
                <Modal.Content>
                    <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            label='Event'
                            control='input'
                            placeholder='Event Name'
                        />
                        <Form.Field
                            label='Organizer'
                            control='input'
                            placeholder='organizer Name'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            label='Venue'
                            control='input'
                            placeholder='Venue Name'
                        />
                        <Form.Field
                            label='Styles'
                            control='input'
                            placeholder='like locking, popping'
                        />
                        
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            label='Prize Money'
                            control='input'
                            placeholder='Prize money if any'
                        />
                         <Form.Field
                            label='Date'
                            control='text'
                        >
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </Form.Group>
                   
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={()=>this.setState({openState: false})}>Close</Button>
                    <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content='Create'
                    />
                </Modal.Actions>
                
            </Modal>
        )
    }
}

export default CreateEventModal
