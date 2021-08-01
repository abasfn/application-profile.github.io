import React from 'react';

type buttonType = {
    title?: string;
    className?: string;
}
const BigButton = (props: buttonType) => {
    const className = props.className + ' ' + 'w-full h-14 rounded-md bg-red-500 text-white text-lg'
    return (
        <button  className={className}>{props.title}</button>
    );
};

export default BigButton;