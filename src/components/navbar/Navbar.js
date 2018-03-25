import React from 'react';
//icon bar x 3, used to make hamburger mobile nav menu on top right corner.
const iconBar = Array(3).fill('icon-bar')
const navBar = ['Login']

const Navbar = (props) => (

  <div>
    <nav className="navbar navbar-default navbar-fixed-top shadow-border">
    	<div className="container-fluid">

         <h1>Learn Live</h1>

          <form className="navbar-form pull-right">
            <div className="form-group">
                <input type="text" className="form-control center-block" placeholder="username"/>
            </div>

            <div className="navbar-header pull-right">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span> 
                    {iconBar.map(bar => <span className={bar}></span>)}
                </button> 
            </div> 
          </form>

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