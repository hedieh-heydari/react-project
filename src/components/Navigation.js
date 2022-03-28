import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,NavLink, NavItem } from 'reactstrap';


const Navigation = () => {
    return (
        <div>
            <Navbar color="info" >
                 <Nav className='justify-items-center align-items-center m-1'>
                    <NavItem>  
                        <Link to='main'  style={{textDecoration:"none"}} className='text-dark'>
                             Homepage
                        </Link>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#' className='text-dark ' >Link 1</NavLink>
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