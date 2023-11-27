import React from 'react';
import Icon from './Icon';
import './ULItem.scss';

export default function ULItem(props: { children: React.ReactNode }) {
    return (
        <div className="ul-item">
            <div className="icon-wrapper">
                <Icon name="chevron-right" size={16} />
            </div>
            <p>{props.children}</p>
        </div>
    );
}
