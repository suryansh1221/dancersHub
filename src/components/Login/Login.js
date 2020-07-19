import React, { Component } from 'react'
import { Button, Checkbox, Form, Segment, Message, Icon } from 'semantic-ui-react'
import SignUpModal from "./SignUpModal";
import { loginUser } from "../../actions/index";
import { connect } from "react-redux";
export class Login extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = { openState: false, email: '', password: '' }
    }
     handleChange = (e) => {
        this.setState({ email: e.target.value })
    }
     handleChange2 = (e) => {
        this.setState({ password: e.target.value })
    }
    handleClick = () => {
        const userData = {"email": this.state.email, "password": this.state.password}
        this.props.loginUser(userData)
    }
    render() {
        return (
            <div>
                <Form fluid inverted style={{ paddingLeft: '40%', paddingTop: '20%' }} size='large'>
                    <Form.Field width={6}>
                        <label >Email</label>
                        <input placeholder='email' value={this.state.email} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field width={6}>
                        <label>Password</label>
                        <input placeholder='password' type='password' value={this.state.password} onChange={this.handleChange2} />
                    </Form.Field>
                    <Button type='submit' color='blue' onClick={this.handleClick}>Login</Button>
                    <span>          </span>
                    <Button type='submit' color='red' onClick={() => this.setState({ openState: true })}>SignUp</Button>
                </Form>
                <SignUpModal openState={this.state.openState} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);