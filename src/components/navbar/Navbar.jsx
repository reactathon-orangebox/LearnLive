import React from 'react';
//icon bar x 3, used to make hamburger mobile nav menu on top right corner.
const iconBar = Array(3).fill('icon-bar')
const navBar = ['Login', 'Sign Up']

const Navbar = (props) => (

  <div>

    <nav className="navbar navbar-default navbar-fixed-top shadow-border">
    	<div className="container-fluid">

          <form className="navbar-form navbar-left pull-right">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-warning">Search</button>
          </form>

          <div className="navbar-header pull-right">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span> 
                    {iconBar.map(bar => <span className={bar}></span>)}
                </button> 
                <a className="navbar-brand" href="#home"><img className="navbar-brand-logo padding"/></a>
        </div> 



    		<div id="navbarCollapse" className="collapse navbar-collapse">
    			<ul className="nav navbar-nav navbar-right">
    				{navBar.map(category=> <li><a href={`#${category}`}>{category}</a></li>)}
    			</ul>
    		</div>

    	</div>
    </nav> 

  </div>

)
export default Navbar;