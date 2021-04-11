import React from 'react';
import './Header.css';
import {Link} from 'react-scroll';

function Header() {
    return (
        <div className='header'>
            
            <div className='header__right'>
                <Link to='about' smooth={true} duration={500}>
                    <h5>About Me</h5>
                </Link>

                <Link to='skills' smooth={true} duration={500}>
                    <h5>Skills</h5>
                </Link>

                <Link to='projects' smooth={true} duration={500}>
                    <h5>Projects</h5>
                </Link>

                <Link to='contact' smooth={true} duration={500}>
                    <h5>Contact</h5>
                </Link>





            </div>
            
        </div>
    )
}

export default Header
