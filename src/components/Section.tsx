import React from 'react';
import './Section.scss';

export default function Section(props: { title: string; link: string; children: React.ReactNode }) {
    return (
        <>
            <a className="anchor" id={props.link}></a>
            <section>
                <div className="section-title">
                    <b>{props.title}</b>
                </div>
                {props.children}
            </section>
        </>
    );
}
