import { Api } from "../../api/Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GamesCard from "../../components/GamesCard/GamesCard";

export default function Viewgame(props){
    const id = props.match.params.id;

    const [game, setGame] = useState(undefined);

    useEffect(() => {
        const loadGame = async () => {
            const response = await Api.buildApiGetRequest(Api.readGameById(id), true);

            const result = await response.json();

            setGame(result);
        };

        loadGame();
    }, [id]);

    const handleDelete = async () => {
        const auth = Boolean(localStorage.getItem("JWT"));
        await Api.buildApiDeleteRequest(
        Api.deleteGame(id), auth
        );
    }

    if(!game){
        return(<div>Loading...</div>);
    }

    return(
        <div className="game">

            <div className="buttons container">
                <Link to={"/game/update/"+ id} 
                className="edit button">
                    Edit Game
                </Link>
                <br/>
                <button onClick={() => handleDelete()}></button>
            </div>
            <p>Title: {game.title}</p>
            <GamesCard game={game}/>
            <br/>
            <br/>
            <p>{game.description}</p>
            <p>Year: {game.year}</p>
            <p>Score IMDB: {game.imdbScore}</p>
            <p>Trailer: {game.ytTrailerLink}</p>
            <p>Gameplay: {game.gameplayLink}</p>        
        </div>
    );
}