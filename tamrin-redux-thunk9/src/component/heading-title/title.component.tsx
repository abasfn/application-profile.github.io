import React from 'react';

type titleType = {
    title?: string;
    className?: string;
    textAlign?: 'text-left' | 'text-right' | 'text-center' | undefined;
    fontSize?: number;
    color?: string;
}
const Title = (props: titleType) => {
    const className = props.className + ' ' + props.textAlign
    return (
        <p className={className}><b>{props.title}</b></p>
    );
};

export default Title;