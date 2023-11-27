import React from 'react';
import Icon, { IconName } from './Icon';
import './IconHeadedText.scss';

export default function IconHeadedText(props: { name: IconName; children: React.ReactNode }) {
    return (
        <div className="icon-headed-text">
            <Icon name={props.name} size={28} />
            <p>{props.children}</p>
        </div>
    );
}
