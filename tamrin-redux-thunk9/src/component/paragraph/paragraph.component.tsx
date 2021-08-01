import React from 'react';

type pragraphType = {
    title?: string;
    className?: string;
    textAlign?: 'text-left' | 'text-right' | 'text-center' | undefined;
    fontSize?: number;
    color?: string;
}
const Paragraph = (props: pragraphType) => {
    const className = props.className + ' ' + props.textAlign
    return (
        <p className={className}>{props.title}</p>

    );
};

export default Paragraph;