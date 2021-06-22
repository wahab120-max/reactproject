import React from 'react';
import {
    Link 
} from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <h1>About</h1>
            <Link to="/home">Home</Link>
            <Link to="/enquery">Enquery</Link>


        </div>
    )
}

export default AboutUs;