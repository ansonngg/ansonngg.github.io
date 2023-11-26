import React from 'react';
import './ImageHeadedText.scss';

export default function ImageHeadedText(props: {
    image: string;
    margin: string;
    children: React.ReactNode;
}) {
    return (
        <div className="image-headed-text">
            <div className="image-wrapper" style={{ marginRight: props.margin }}>
                <img
                    src={props.image}
                    alt={props.image.replace(/\.[^/.]+$/, '')}
                />
            </div>
            <p>{props.children}</p>
        </div>
    );
}
