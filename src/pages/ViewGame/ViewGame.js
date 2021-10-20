import { Api } from "../../api/Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GamesCard from "../../components/GamesCard/GamesCard";

export default function ViewGame(props){
    const id = props.match.params.id;

    const [game, setGame] = useState(undefined);
    
    useEffect(() => {
        console.log(1);
        const loadGame = async () => {
            const response = await Api.buildApiGetRequest(Api.readGameById(id));

            const result = await response.json();

            setGame(result);
        
        };

        loadGame();
    }, []);

    if(!game){
        return(<div>Loading...</div>);
    }

    return(
        <div className="body">
            <h1>{game.title}</h1>
            <div className="gameView">
                <img className="imageGameView" src={game.imageUrl}/>
                <div className="detailsView">
                    <p className="description">{game.description}</p>
                    <p>Year: {game.year}</p>
                    <p>Score IMDB: {game.imdbScore}</p>
                </div>
            <div className="viewGame-videos">
                <iframe
                    width="240"
                    height="180"
                    src={game.ytTrailerLink.replace('watch?v=', 'embed/')}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                />
            <iframe
                width="240"
                height="180"
                src={game.gameplayLink.replace('watch?v=', 'embed/')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            />
            </div>
            </div>
            <div className="buttons container">
                <Link to={"/game/update/"+ id} 
                className="edit button">
                    Edit Game
                </Link>
                <br/>
                <Link to={"/game/delete/" +id} game={game}>Delete</Link>
            </div>        
        </div>
    );
}