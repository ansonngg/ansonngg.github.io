import { ReactElement } from 'react';
import './Timeline.scss';

export default function Timeline(props: { titles: ReactElement[], contents: ReactElement[] }) {
    const items: ReactElement[] = [];
    
    for (let i = 0; i < props.titles.length; i++) {
        items.push(
            <div key={i} className="timeline-item">
                <div className="timeline-item-title">
                    {props.titles[i]}
                </div>
                <div className="timeline-item-content">
                    {props.contents[i]}
                </div>
            </div>
        )
    }

    return (
        <div className="timeline">
            {items}
        </div>
    );
}
