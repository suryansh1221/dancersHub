import React, {Component} from 'react';
import {Icon, Menu, Sidebar, Button, Grid} from 'semantic-ui-react';
import {MainContent} from './MainContent';
import {CreateEventModal} from '../Events/CreateEventModal';

import {connect} from 'react-redux';
import {openModal} from '../../actions/index';
import PropTypes from 'prop-types';

export class Dashboard extends Component {
    state = {openState: false}
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState) {
      if (this.props.state.openState !== prevProps.state.openState) {
        this.setState({openState: this.props.state.openState});
      }
    }
    render() {
      return (
        <Grid centered columns={3} padded='horizontally'>
          <CreateEventModal openState={this.state.openState} />
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
              <Menu.Item as='a' onClick={()=>{
                if (this.state.openState == true) {
                  this.props.openModal(false);
                  this.props.openModal(true);
                } else {
                  this.props.openModal(true);
                }
              }}>
                <Icon name='plus' />
                        Create Event
              </Menu.Item>
              <Menu.Item as='a' >
                <Icon name='info' />
                        Your Events
              </Menu.Item>
            </Sidebar>
          </Grid.Column>
          <Grid.Column width={12}
            textAlign='center'
            style={{paddingTop: '100px', paddingLeft: '220px'}}>
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
            <Button negative
              floated='right'
              size='large'
              style={{marginLeft: '60px', marginTop: '30px'}}>Logout</Button>
          </Grid.Column>
        </Grid>
      );
    }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => {
      dispatch(openModal(data));
    },
  };
};

Dashboard.propTypes = {
  openModal: PropTypes.func,
  state: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
