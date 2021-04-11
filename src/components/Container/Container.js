import React from 'react';
import './Container.css';
import {Element} from 'react-scroll';
import ContainerContent from '../Containercontent/ContainerContent';

function Container() {
    return (
        <div>
            <Element name='about' className='container'>
                <ContainerContent/>

            </Element>
            
        </div>
    )
}

export default Container
