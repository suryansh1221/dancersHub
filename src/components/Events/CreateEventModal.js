import React, { Component } from 'react'
import { Button, Modal, Form, Dropdown } from "semantic-ui-react";
import { openModal } from "../../actions/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class CreateEventModal extends Component {
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
            <Modal size='small' open={this.state.openState} onClose={this.close} closeOnDimmerClick={true}>
                <Modal.Header> Create Event </Modal.Header>
                <Modal.Content>
                    <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                                label='Event Type'
                                control='dropdown'
                                placeholder='select'
                            >
                            <Dropdown
                                onChange={this.handleChange2}
                                options={options}
                                placeholder='Choose an option'
                                selection
                                value={this.state.value}
                            /> 
                        </Form.Field>
                        <Form.Field
                                label='Start Date'
                                control='dropdown'
                            >
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field
                                label='End Date'
                                control='dropdown'
                            >
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleChange3}
                                disabled={this.state.startDate?false:true}
                            />
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Group widths='equal'>
                        <Form.Field
                            label='Event'
                            control='input'
                            placeholder='Event Name'
                        />
                        <Form.Field
                            label='Entry Fees'
                            control='input'
                            placeholder='e.g. early bird: 200rs or  single class: 100rs'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                                label='Organizer'
                                control='input'
                                placeholder='organizer Name'
                        />
                        <Form.Field
                                label='Instructors'
                                control='input'
                                placeholder='Instructors Name'
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
                            control='dropdown'
                            placeholder='like locking, popcping'
                        >  <Dropdown
                        placeholder='Select style'
                        fluid
                        search
                        selection
                        multiple
                        allowAdditions
                        options={stylesOptions}
                      />
                        </Form.Field>
                        
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            label='Prize Money'
                            control='input'
                            placeholder='Prize money if any'
                        />
                         <Form.Field
                            label='Contact Number'
                            control='input'
                            placeholder='e.g. 99345xxxxx'
                        />
                    </Form.Group>
                   <Form.Group fluid widths='equal'>
                       <Form.Field label='Description' control='input' />
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
