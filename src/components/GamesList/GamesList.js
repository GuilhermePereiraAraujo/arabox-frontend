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

    return (
      <div className="gameCards">
        {games.map((game, index) => (
          <GamesCard game={game} key={index} />
        ))}
        <Link to={`/creategame`}>
          <div className="card wrapper">
            <img src={add} className="cardImage" alt="addIcon" />
            <p className="createGame">Add Game</p>
          </div>
        </Link>
      </div>
    );
}