import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Input, Container } from 'semantic-ui-react'
import Login from '../Login/Login'
 
export class Dashboard extends Component {
    render() {
        return (

            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                vertical
                visible
                width='thin'
                >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
                </Sidebar>
        )
    }
}

export default Dashboard
