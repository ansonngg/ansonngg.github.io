'use client';

import React from 'react';
import StartGame from '@/library/Game';
import './GameEntity.scss';

export default function GameEntity(props: { entityId: number; children: React.ReactNode }) {
    const id = `entity-${props.entityId}`;
    return (
        <div className="game-entity" id={id} onClick={() => StartGame(id)}>
            {props.children}
        </div>
    );
}
