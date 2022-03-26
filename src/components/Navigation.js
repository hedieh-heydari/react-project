import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav,NavLink, NavItem } from 'reactstrap';

import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
            <Navbar color="info" dark >
                 <Nav>
                    <NavItem>
                        <NavLink >
                        <Link className={styles.link} to='#'>Homepage</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                        <Link className={styles.link}  to='#'>Blog</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                        <Link className={styles.link} to='#'>Products</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                        <Link className={styles.link} to='#'>About</Link>
                        </NavLink>
                    </NavItem>
                 </Nav>
            </Navbar>
            
        </div>
    );
};

export default Navigation;