'use client';

import { Icon } from '@iconify/react';
import './IconButton.scss';

export default function IconButton(props: { icon: string; size?: number; link?: string; onClick?: () => void }) {
    if (props.link) {
        return (
            <a className="icon-button" href={props.link}>
                <Icon icon={props.icon} height={props.size ?? '38'} />
            </a>
        );
    }

    if (props.onClick) {
        return (
            <div className="icon-button">
                <Icon icon={props.icon} height={props.size ?? '38'} onClick={props.onClick} />
            </div>
        );
    }

    return (
        <div className="icon-button">
            <Icon icon={props.icon} height={props.size ?? '38'} />
        </div>
    );
}
