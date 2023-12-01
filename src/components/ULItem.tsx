'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import './ULItem.scss';

export default function ULItem(props: { children: React.ReactNode }) {
    return (
        <div className="ul-item">
            <div className="icon-wrapper">
                <Icon icon="fluent:caret-right-16-regular" height="18" />
            </div>
            <p>{props.children}</p>
        </div>
    );
}
