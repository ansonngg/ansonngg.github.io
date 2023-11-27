import React from 'react';
import './GameEntity.scss';

export default function GameEntity(props: {
    entityId: number;
    children: React.ReactNode;
}) {
    return <div className="game-entity">{props.children}</div>;
}
