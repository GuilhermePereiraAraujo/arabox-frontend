import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import GamesCard from "../GamesCard/GamesCard";
import add from "./add.png";

export function GamesList(){
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllGames(), true);
        
            const bodyResult = await response.json();

            setGames(bodyResult);
        };

        loadData();

    }, []);

    return(
        <div className="gameCards">
            {games.map((game, index) => (
                    <Link to={`/game/${game.id}`}>
                    <GamesCard game={game} key={index}/>
                    </Link>
            ))}
            <Link to={`/creategame`}>
                <img src={add}/>
            </Link>
        </div>
    );
}