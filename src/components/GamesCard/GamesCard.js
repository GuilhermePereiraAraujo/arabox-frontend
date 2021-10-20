import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
export default function GamesCard({game}){
    const rating = parseInt(game.imdbScore/2);
    //console.log(rating)
    return(
        <Link to={`/game/${game.id}`}>
        <div className="card wrapper" >
            <img src={game.imageUrl} alt={game.title} className="cardImage" title={game.title}/>
            <div className="card details">
                <p className="gameName">{game.title}</p>
                <p className="gameYear">{game.year}</p>
            </div>
            <StarRating rating = {rating} className="starRating"/>
        </div>
        </Link>        
    );
}