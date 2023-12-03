import React from 'react';
import './TableItem.scss';

export default function TableItem(props: {
    title: React.ReactNode;
    className?: string;
    titleWidth?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={'table-item ' + (props.className ?? '')}>
            <div className="table-item-title" style={{ width: props.titleWidth ?? '200px' }}>
                {props.title}
            </div>
            <div className="table-item-content">{props.children}</div>
        </div>
    );
}
