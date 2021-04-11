import React from 'react';
import './Contact.css';
import {Element} from 'react-scroll';
import {IconButton} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';


function Contact() {
    return (
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
             <div className='contact__container'>
                 
                 <p>
                      Email : <span>sivadurgesh0897@gmail.com</span>
                 </p>

                 <p>
                      Githib URL : <span>https://github.com/durgesh0812</span>

                 </p>

                 <div className='contact__icons'>
                     <a href='https://github.com/durgesh0812'>
                         <IconButton>
                             <GitHub style={{color:'white'}}/>
                         </IconButton>
                     </a>

                 </div>
            
            </div>

        </Element>
       
    )
}

export default Contact
