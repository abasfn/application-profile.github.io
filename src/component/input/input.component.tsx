import React from 'react';

type inputType = {
    placeholder?: string;
    className?: string;
    onChange?: (e:any) => void;
    onKeyDown?: (e:any) => void;
}
const Input = (props: inputType) => {
    const className = props.className + ' ' + 'w-full h-14 rounded-md p-4 bg-gray-100'
    return (
        <input onKeyDown={props.onKeyDown} onChange={props.onChange} placeholder={props.placeholder} className={className} />
    );
};

export default Input;