import React from 'react';
import { Link } from 'react-router-dom';
import BigButton from '../component/big-button/bigbutton.component';
import Title from '../component/heading-title/title.component';
import Input from '../component/input/input.component';
import Paragraph from '../component/paragraph/paragraph.component';
import ProfileTitle from '../component/profiletitle/profiletitle.component';
import RectangleData from '../component/Rectangle of data/Rectangledata';

const PageData = () => {
    const model1 = [
        { title: '14.45 AM', className: 'border-gray-400 border bg-gray-200 text-gray-400 w-full', id: 0 },
        { title: '14.45 PM', className: 'border-red-400 border bg-red-500 text-white w-full', id: 1 },
        { title: '14.45 AM', className: 'border-gray-400 border bg-gray-200 text-gray-400 w-full', id: 2 },
        { title: '14.45 PM', className: 'border-red-400 border bg-white text-red-400 w-full', id: 3 },
    ]
    const model2 = [
        { title: '14.45 AM', className: 'border-red-400 border bg-white text-red-400 w-full', id: 4 },
        { title: '14.45 PM', className: 'border-red-400 border bg-white text-red-400 w-full', id: 5 },
        { title: '14.45 PM', className: 'border-red-400 border bg-red-500 text-white w-full', id: 6 },
        { title: '14.45 AM', className: 'border-gray-400 border bg-gray-200 text-gray-400 w-full', id: 7 },
    ]
    const model3 = [
        { title: '14.45 PM', className: 'border-red-400 border bg-red-500 text-white w-full', id: 8 },
        { title: '14.45 AM', className: 'border-red-400 border bg-red-500 text-white w-full', id: 9 },
        { title: '14.45 AM', className: 'border-gray-400 border bg-gray-200 text-gray-400 w-full', id: 10 },
        { title: '14.45 PM', className: 'border-red-400 border bg-white text-red-400 w-full', id: 11 },
    ]
    return (
        <div className='p-3'>
            <ProfileTitle titleClassName='text-xl mt-3.5' srcImage='image/dataIcone.jpg' title='Available time' paragraph='Adjust to your schedule' />
            <div className='mt-8 space-y-4'>
                <RectangleData className='grid grid-cols-4 gap-2 justify-items-stretch' model={model1} />
                <RectangleData className='grid grid-cols-4 gap-2 justify-items-stretch' model={model2} />
                <RectangleData className='grid grid-cols-4 gap-2 justify-items-stretch' model={model3} />
            </div>
            <div className='mt-8 space-y-4'>
                <div>
                    <Title className='text-base text-gray-900' title='Email' textAlign='text-left' />
                    <Input className='mt-1.5' placeholder="samuel_herickson@gmail.com" />
                </div>
                <div>
                    <Title className='text-base text-gray-900' title='Telp number' textAlign='text-left' />
                    <Input className='mt-1.5' placeholder="(001) 34 4567890" />
                </div>
                <div>
                    <Title className='text-base text-gray-900 mb-1' title='Schedule date & time' textAlign='text-left' />
                    <div className='flex'>
                        <img src='image/Check Box.jpg' alt='Check Box' />
                        <Paragraph className='text-gray-500 ml-2' title="12 October, 2020 at 09.45 AM" />
                    </div>
                </div>
            </div>
            <Link to='/LivePage'> <BigButton className='mt-32' title="Apply" /></Link>
        </div>
    );
};

export default PageData;