import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export class Login extends Component {
    render() {
        return (
            <Form fluid inverted style={{paddingLeft: '40%', paddingTop: '20%'}} size='large'>
                <Form.Field width={6}>
                <label >Email</label>
                <input placeholder='email' />
                </Form.Field>
                <Form.Field width={6}>
                <label>Password</label>
                <input placeholder='password' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Login
