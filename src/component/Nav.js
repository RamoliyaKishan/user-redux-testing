import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className="navbar navbar-expand-md">
				<div className="container">
					<div className="collapse navbar-collapse " id="navbarNavDropdown">
						<ul className="nav navbar-nav pull-right">
							<li className="nav-item">
								<Link className="item" to=''>Users Data</Link>
							</li>
							<li className="nav-item">
								<Link className="item" to="/usersList">User's List</Link>
							</li>
							
						</ul>
                        
					</div>
                    <div>
                        <ul className="nav navbar-nav justify-content-end">
                            <li className="nav-item">
								<Link className="btn btn-primary" to="/addUser" type="button" role="button">Add Users</Link>
						    </li>
                        </ul>
                    </div>
					
										
				</div>
			</nav>
    )
}

export default Nav
