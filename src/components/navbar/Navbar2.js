import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Navbar2 extends Component {

  state = { activeItem: 'nothing' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="shadow-border">
      <Menu secondary>

        <img src="http://www.eatlogos.com/food_and_drinks/png/vector_food_orange_logo.png" className="logoResize"/>
        <h1 className="brandResize">Learn Live</h1>
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='Courses' active={activeItem === 'courses'} onClick={this.handleItemClick} />
        <Menu.Item name='Professionals' active={activeItem === 'professionals'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            <Input icon='user' placeholder='Username...' />
          </Menu.Item>

          <Menu.Item name='Sign In' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}