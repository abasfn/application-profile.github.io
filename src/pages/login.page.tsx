import React from 'react';
import { Link } from 'react-router-dom';
import BigButton from '../component/big-button/bigbutton.component';
import BigbuttonIcone from '../component/big-button/bigbuttonicone.component';
import Title from '../component/heading-title/title.component';
import Input from '../component/input/input.component';
import Line from '../component/line/line.component';
import Paragraph from '../component/paragraph/paragraph.component';

const LoginPage = () => {
    return (
        <div className='p-3'>
            <img alt='Logo' className="m-auto mt-6" src="image/Star 1.jPG" />
            <Input className='mt-8' placeholder="Email" />
            <Input className='mt-4' placeholder="Password" />
            <Link to='mainPage'> <BigButton className='mt-6 mb-8' title="Log in" /></Link>
            <Title className='mt-6 mb-6 text-blue-500' title="Forgot Password?" textAlign='text-center'  />
            <Line />
            <BigbuttonIcone srcImage='image/google.jPG' className='mt-5 bg-blue-500 text-white'  title='Log in with Facebook' />
            <BigbuttonIcone srcImage='image/google.jPG' className='mt-4 bg-gray-100' title='Log in with Google' />
            <div className='flex justify-center mt-20'>
                <Paragraph className='text-gray-500' title="Don’t have an account?"  />
                <Link to='/signup'><Title className='ml-2 mt-0.5 text-blue-500' title='Sign Up'/></Link>
            </div>
        </div>
    );
};

export default LoginPage;