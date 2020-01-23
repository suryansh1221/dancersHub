import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Input, Container, Button, Card, Grid } from 'semantic-ui-react'
import Login from '../Login/Login'
import { MainContent } from "./MainContent";
export class Dashboard extends Component {
    render() {
        return (
            <Grid centered columns={3} padded='horizontally'>
                <Grid.Column width={2}>
                    <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    vertical
                    inverted
                    visible
                    width='thin'
                    >
                    <Menu.Item as='a' >
                        <Icon name='user circle' />
                        My Account
                    </Menu.Item>
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
                </Grid.Column>
                <Grid.Column width={12} textAlign='center' style={{paddingTop: '100px', paddingLeft: '220px'}}>
                    <Grid.Column width={4} >
                        <MainContent />
                    </Grid.Column>
                    <Grid.Column width={4} >
                        <MainContent />
                    </Grid.Column>
                    <Grid.Column width={4} >
                        <MainContent />
                    </Grid.Column>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button negative floated='right' size='large' style={{marginLeft: '60px', marginTop: '30px'}}>Logout</Button>
                 </Grid.Column>
            </Grid>
        )
    }
}

export default Dashboard
