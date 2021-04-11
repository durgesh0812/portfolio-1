import React from 'react';
import './ContainerContent.css';
import {Link} from 'react-scroll';

function ContainerContent() {
    return (
        <div className='content'>
            <div className='contents'>
                <h1>DURGESH SIVASHANMUGAM</h1>
                <a href='https://drive.google.com/file/d/1bAeZRcjcoxpT7rRiDwEMg6MJFI9bdp0L/view?usp=sharing'>
                    <button className='contents_cv'>Download CV</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='contents_projects'>PROJECTS</button>

                </Link>

            </div>
            
        </div>
    )
}

export default ContainerContent
