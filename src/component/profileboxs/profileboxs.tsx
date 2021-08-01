import React from 'react';
import Title from '../heading-title/title.component';
import Paragraph from '../paragraph/paragraph.component';

export type Model = {
    profile: string;
    title: string;
    paragraph: string;
    minutes: string;
    id?:number;
}
type ProfileBoxsType = {
    model: Model[]
}
const ProfileBoxs = (props: ProfileBoxsType) => {
    return (
        <div className='mt-6'>
            {props.model.map(item => {
                return (
                    <div key={item.id} className='mb-7'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                    <div className='mt-1.5'>
                                        <img className='max-w-none' alt='profile' src={item.profile} />
                                    </div>
                                <div className='ml-2'>
                                    <Title textAlign='text-left' className='ml-2 mt-0.5 text-gray-900' title={item.title} />
                                    <Paragraph className='w-48 ml-2 text-gray-500' textAlign='text-left' title={item.paragraph}  />
                                </div>
                            </div>
                            <div className='mt-1 flex'>
                                <Paragraph textAlign='text-right' className='mr-2 text-gray-300 text-sm' title={item.minutes}  />
                                <div>
                                    <img  alt='icone' className='mt-0.5 max-w-none' src='image/flash.png' />
                                </div>
                            </div>
                        </div>
                        <div className='float-right mt-4 h-0.5 bg-gray-300 w-11/12'></div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProfileBoxs;