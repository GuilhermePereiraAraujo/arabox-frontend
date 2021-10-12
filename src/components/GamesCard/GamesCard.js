import React from 'react';
export default function GamesCard({game}){
    return(
        <div className="cardImage wrapper" >
            <img src={game.imageUrl} alt={game.title} className="cardImage" title={game.title}/>
            <p className="gameName">{game.title}</p>
        </div>
    );
}