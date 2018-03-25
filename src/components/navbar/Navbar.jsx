import React from 'react';
//icon bar x 3, used to make hamburger mobile nav menu on top right corner.

const iconBar = Array(3).fill('icon-bar')
const navBar = ['Login']

const Navbar = (props) => (

  <div>

    <nav className="navbar navbar-default navbar-fixed-top shadow-border">
    	<div className="container-fluid">


    		<div className="navbar-header">
    			<button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
    				<span className="sr-only">Toggle navigation</span> 
    				{iconBar.map(bar => <span className={bar}></span>)}
    			</button> 
    			<a className="navbar-brand" href="#home"><img className="navbar-brand-logo padding" alt="Learn Live logo" /></a>
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