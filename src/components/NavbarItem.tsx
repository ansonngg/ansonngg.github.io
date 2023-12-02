'use client';

import React from 'react';
import './NavbarItem.scss';

function OnClick(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

export default function NavbarItem(props: { target: string; callback?: () => void; children: React.ReactNode }) {
    return (
        <div
            className="navbar-item"
            onClick={() => {
                OnClick(props.target);

                if (props.callback) {
                    props.callback();
                }
            }}
        >
            <b>{props.children}</b>
        </div>
    );
}
