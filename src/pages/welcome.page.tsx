import React from 'react';
import BigButton from '../component/big-button/bigbutton.component';
import Title from '../component/heading-title/title.component';
import Paragraph from '../component/paragraph/paragraph.component';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div>
            <img alt='Logo' className="m-auto mt-12" src="image/Logo.jpg" />
            <Title className='mt-16  text-2xl text-gray-900' title='Welcome to Ajheryuk' textAlign='text-center' />
            <Paragraph className='mt-1.5 text-gray-500' title="Best and popular apps for live education" textAlign='text-center' />
            <Paragraph className='text-gray-500' title="course from home" textAlign='text-center'  />
            <div className="m-auto p-3 mt-12">
                <Link to='/login'><BigButton title="Get started" /></Link>
            </div>
        </div>
    );
};

export default WelcomePage;