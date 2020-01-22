import { Header } from "semantic-ui-react"
import React from 'react'
import Zoom from 'react-reveal/Zoom'

import  HeaderExampleUsersIcon  from "./BrowseArrow"
import  logo  from '../306455.png'

const Home = () => {

    return (
    <Zoom>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header style={{color:'white'}}> Data Structures and Algorithms </Header>
        <HeaderExampleUsersIcon />
        </header>
    </Zoom>
    )
}

export default Home