import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,NavLink, NavItem } from 'reactstrap';


const Navigation = () => {
    return (
        <div>
            <Navbar color="info" >
                 <Nav>
                    <NavItem>
                        <NavLink>
                            <Link  className='text-dark' style={{textDecoration:"none"}} to='main'>Homepage</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark ' >Link 1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark' >Link 2 </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark' >Link3 </NavLink>
                    </NavItem>
                 </Nav>
            </Navbar>
            
        </div>
    );
};

export default Navigation;