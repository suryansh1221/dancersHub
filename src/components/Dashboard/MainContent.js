import React, { Component } from 'react'
import { Card, Icon } from "semantic-ui-react";
export class MainContent extends Component {
    render() {
        return (
            <Card.Group >
                        <Card > <Card.Content>
      <Card.Header>
        <div style={{fontFamily: 'Comic Sans MS'}}>
          Matthew
        </div>
      </Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
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
