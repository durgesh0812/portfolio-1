import { LinearProgress } from '@material-ui/core';
import React from 'react';
import {Element} from 'react-scroll';
import skillimg from '../Images/skills.jpg';
import './Skills.css'

function Skills() {
    return (
       
        <Element className='skills' id='skills1'>
            <div className='skills__image'>
                <img src={skillimg} alt="" />

            </div>

            <div className='skills__text'>
                <h2>Skills</h2>
                <div className='skills__skillset'>
                    <h5>React</h5>
                    <div className='skills__slider skills__slider1'>
                        <LinearProgress variant='determinate' value={80} />
                    </div>
                    </div>

                    <div className='skills__skillset'>
                    <h5>Node JS</h5>
                    <div className='skills__slider skills__slider2'>
                        <LinearProgress variant='determinate' value={70} />
                    </div>
                    </div>

                    <div className='skills__skillset'>
                    <h5>Express JS</h5>
                    <div className='skills__slider skills__slider3'>
                        <LinearProgress variant='determinate' value={50} />
                    </div>
                    </div>

                    <div className='skills__skillset'>
                    <h5>Mongo DB</h5>
                    <div className='skills__slider skills__slider4'>
                        <LinearProgress variant='determinate' value={60} />
                    </div></div>

                    <div className='skills__skillset'>
                    <h5>Javascript</h5>
                    <div className='skills__slider skills__slider5'>
                        <LinearProgress variant='determinate' value={70} />
                    </div></div>

                    <div className='skills__skillset'>
                    <h5>Firebase</h5>
                    <div className='skills__slider skills__slider6'>
                        <LinearProgress variant='determinate' value={60} />
                    </div></div>

                    <div className='skills__skillset'>
                    <h5>AWS</h5>
                    <div className='skills__slider skills__slider7'>
                        <LinearProgress variant='determinate' value={50} />
                    </div>
                </div>
                <div className='skills__skillset'>
                    <h5>SQL</h5>
                    <div className='skills__slider skills__slider8'>
                        <LinearProgress variant='determinate' value={70} />
                    </div>
                </div>
            </div>

        </Element>
       
    )
}

export default Skills


