import React from 'react';

type bigbuttonIconeType = {
    title?: string;
    className?: string;
    background?: string;
    color?: string;
    srcImage?: string
}
const BigbuttonIcone = (props: bigbuttonIconeType) => {
    const className = props.className + ' ' + 'w-full h-14 rounded-md'
    return (
        <button className={className}>
            <div className='flex justify-center text-lg'> <img className='mr-3' src={props.srcImage} />{props.title}</div>
        </button>
    );
};

export default BigbuttonIcone;