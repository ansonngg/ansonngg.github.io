'use client';

import React from 'react';
import './NavbarItem.scss';

export default function NavbarItem(props: {
    target: string;
    children: React.ReactNode;
}) {
    function OnClick(target: string) {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="navbar-item" onClick={() => OnClick(props.target)}>
            <p>{props.children}</p>
        </div>
    );
}
