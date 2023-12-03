'use client';

import React, { useState } from 'react';
import IconButton from './IconButton';
import NavbarItem from './NavbarItem';
import './Overlay.scss';

export default function Overlay(props: { button: React.ReactNode; buttonClass?: string; children?: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);

    const closeOverlay = () => {
        setIsVisible(false);
        document.body.classList.remove('no-scroll');
    };

    if (!props.children) {
        return (
            <>
                <div
                    className={props.buttonClass ?? ''}
                    onClick={() => {
                        setIsVisible(true);
                        document.body.classList.add('no-scroll');
                    }}
                >
                    {props.button}
                </div>
                <div className={'overlay' + (isVisible ? ' visible' : '')}>
                    <div className="overlay-header">
                        <IconButton icon="mingcute:close-line" onClick={closeOverlay} />
                    </div>
                    <div className="overlay-content navbar-menu">
                        <NavbarItem target="home" callback={closeOverlay}>
                            Home
                        </NavbarItem>
                        <NavbarItem target="about-me" callback={closeOverlay}>
                            About Me
                        </NavbarItem>
                        <NavbarItem target="experience" callback={closeOverlay}>
                            Experience
                        </NavbarItem>
                        <NavbarItem target="projects" callback={closeOverlay}>
                            Projects
                        </NavbarItem>
                        <NavbarItem target="my-story" callback={closeOverlay}>
                            My Story
                        </NavbarItem>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div
                className={props.buttonClass ?? ''}
                onClick={() => {
                    setIsVisible(true);
                    document.body.classList.add('no-scroll');
                }}
            >
                {props.button}
            </div>
            <div className={'overlay' + (isVisible ? ' visible' : '')}>
                <div className="overlay-header">
                    <IconButton
                        icon="mingcute:close-line"
                        onClick={() => {
                            setIsVisible(false);
                            document.body.classList.remove('no-scroll');
                        }}
                    />
                </div>
                <div className="overlay-content">{props.children}</div>
            </div>
        </>
    );
}
