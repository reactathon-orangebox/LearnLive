import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'nothing',
      loginInput: '',
      searchInput: ''
    }
  }

  handleLoginInput(event) {
    console.log(event.target.value);
    this.setState({loginInput: event.target.value});
  }

  handleLoginClick() {
    // console.log(this.props.login);
    this.props.login(this.state.loginInput);
    this.setState({loginInput: ''})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleNavChange(view) {
    // console.log(this.props.switch)
    this.props.switch(view);
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="shadow-border">
      <Menu secondary>

        <img src="http://www.eatlogos.com/food_and_drinks/png/vector_food_orange_logo.png" className="logoResize"/>
        <h1 className="brandResize">Learn Live</h1>
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleNavChange.bind(this, 'home')} />
        <Menu.Item name='Courses' active={activeItem === 'courses'} onClick={this.handleNavChange.bind(this, 'subjects')} />
        <Menu.Item name='Professionals' active={activeItem === 'professionals'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            <Input id='login' icon='user' value={this.state.loginInput} placeholder='Username...' onChange={this.handleLoginInput.bind(this)} />
          </Menu.Item>

          <Menu.Item name='Sign In' active={activeItem === 'logout'} onClick={this.handleLoginClick.bind(this)} />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

export default Navbar2;