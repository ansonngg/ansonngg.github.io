import React from 'react';
import Icon from './Icon';
import './IconHeadedText.scss';

export default function IconHeadedText(props: { name: string; children: React.ReactNode }) {
    return (
        <div className="icon-headed-text">
            <Icon name={props.name} size={28} />
            <p>{props.children}</p>
        </div>
    );
}
