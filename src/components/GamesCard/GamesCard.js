import React from 'react';
export default function GamesCard({game}){
    return(
        <div className="card">
            <h1 className="card__title">{game.title}</h1>
            <img src={game.imageUrl} alt={game.title} width="200" />
        </div>
    );
}