import React from 'react';
import { Navbar, Nav,NavLink, NavItem } from 'reactstrap';


const Navigation = () => {
    return (
        <div>
            <Navbar color="info" >
                 <Nav>
                    <NavItem>
                        <NavLink className='text-dark'  >Homepage</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark' >Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark' >Products </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark' >About </NavLink>
                    </NavItem>
                 </Nav>
            </Navbar>
            
        </div>
    );
};

export default Navigation;