import React from 'react';
import './Section.scss';

export default function Section(props: { title: string; link: string; children: React.ReactNode }) {
    return (
        <section id={props.link}>
            <div className="section-title">
                <b>{props.title}</b>
            </div>
            {props.children}
        </section>
    );
}
