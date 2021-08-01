import React from 'react';

type model = {
    title?: string;
    className?: string;
    id?:number;
}
type RectangleData = {
    model: model[];
    className?: string;
}
const RectangleData = (props: RectangleData) => {
    return (
        <div className={props.className}>
            {props.model.map(item => {
                const className = item.className
                return (
                    <button key={item.id} className={className + ' rounded-lg p-2 text-sm'}>
                        {item.title}
                    </button>
                )
            })}
        </div>
    );
};

export default RectangleData;