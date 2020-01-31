import React, { Component } from 'react'
import { Button, Checkbox, Form, Segment, Message, Icon } from 'semantic-ui-react'
import SignUpModal from "./SignUpModal";

export class Login extends Component {
    state = {openState: false}
    render() {
        return (
            <div>
                <Form fluid inverted style={{paddingLeft: '40%', paddingTop: '20%'}} size='large'>
                    <Form.Field width={6}>
                    <label >Email</label>
                    <input placeholder='email' />
                    </Form.Field>
                    <Form.Field width={6}>
                    <label>Password</label>
                    <input placeholder='password' />
                    </Form.Field>
                    <Button type='submit' color='blue'>Login</Button>
                    <span>          </span>
                    <Button type='submit' color='red' onClick={()=> this.setState({openState: true})}>SignUp</Button>
                </Form>
               <SignUpModal openState={this.state.openState}/>
              </div>
        )
    }
}

export default Login
