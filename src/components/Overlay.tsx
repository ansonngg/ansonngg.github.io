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
                        <NavbarItem target="about-me-anchor" callback={closeOverlay}>
                            About Me
                        </NavbarItem>
                        <NavbarItem target="experience-anchor" callback={closeOverlay}>
                            Experience
                        </NavbarItem>
                        <NavbarItem target="projects-anchor" callback={closeOverlay}>
                            Projects
                        </NavbarItem>
                        <NavbarItem target="my-story-anchor" callback={closeOverlay}>
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
