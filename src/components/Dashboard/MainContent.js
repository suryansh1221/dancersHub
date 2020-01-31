import React, { Component } from 'react'
import { Card, Icon } from "semantic-ui-react";
export class MainContent extends Component {
    render() {
        return (
            <Card.Group >
                        <Card floated='right'> <Card.Content>
      <Card.Header style={{fontSize: '28px', color:'indianred'}}>Battle</Card.Header>
      <Card.Meta>
        <span className='date' style={{color: 'gray'}}>Blame It On The Boogie</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>01/02/2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in.....
      </Card.Description>
    </Card.Content>
    <Card.Content extra >
      <a href='/'>
        <Icon name='view' />
          View more
      </a>
    </Card.Content></Card>
    </Card.Group>
                
        )
    }
}

export default MainContent
