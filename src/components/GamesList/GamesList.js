import { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import GamesCard from "../GamesCard/GamesCard";

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
                    <GamesCard game={game} key={index}></GamesCard>
            ))}
        </div>
    );
}