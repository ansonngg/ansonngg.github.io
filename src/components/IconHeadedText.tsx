'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import './IconHeadedText.scss';

export default function IconHeadedText(props: { icon: string; children: React.ReactNode }) {
    return (
        <div className="icon-headed-text">
            <Icon icon={props.icon} height="28" />
            <p>{props.children}</p>
        </div>
    );
}
