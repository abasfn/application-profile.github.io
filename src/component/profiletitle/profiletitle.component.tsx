import React from 'react';
import Title from '../heading-title/title.component';
import Paragraph from '../paragraph/paragraph.component';

type ProfileTitleType = {
    srcImage?: string;
    profile?: string;
    title?: string;
    paragraph?: string;
    titleClassName?: string;
    paragraphClassName?: string;
}
const ProfileTitle = (props: ProfileTitleType) => {
    const classNameTitle = props.titleClassName + ' ' + 'ml-2 text-gray-900';
    const classNameParagraph = props.paragraphClassName + ' ' + 'ml-2 text-gray-300';
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                {props.profile &&
                    <div className='mt-1.5 mr-2'>
                        <img alt='profile' src={props.profile} />
                    </div>
                }
                <div>
                    <Title className={classNameTitle} title={props.title} />
                    <Paragraph title={props.paragraph} className={classNameParagraph} />
                </div>
            </div>
            {props.srcImage &&
                <div className='mt-4'>
                    <img alt='profile' src={props.srcImage} />
                </div>
            }
        </div>
    );
};

export default ProfileTitle;