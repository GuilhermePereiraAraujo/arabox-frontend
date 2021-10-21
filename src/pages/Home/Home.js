import React, { useCallback, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import GamesCard from "../../components/GamesCard/GamesCard";

export default function Home() {
  console.log(4);
  const [games, setGames] = useState([]);
  const [erro, setErro] = useState(null);
  const [genres, setGenres] = useState([]);
  const [filter, setFilter] = useState(null);
  const [genreName, setGenreName] = useState("");

  const loadData = useCallback(async () => {
    if (filter) {
      await Api
        .buildApiGetRequest(Api.readGenreById(filter), true)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((response) => {
          setGames(response.games);
          setGenreName(response.name);
        })
        .catch((err) => {
          setErro(err);
        })
    } else {
      await Api
        .buildApiGetRequest(Api.readAllGames(), true)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((response) => {
          setGames(response);
        })
        .catch((err) => {
          setErro(err);
        })
    }
  }, [filter]);

  const loadGenres = async () => {
    await Api
      .buildApiGetRequest(Api.readAllGenres(), true)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => {
        setGenres(response);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    loadData();
    loadGenres();
  }, [loadData]);

  if (erro) {
    return <div>error</div>;
  }
  return (
    <main className="gamesList">
        <div className="gamesList__filters">
          <span className="gamesList__filters--span">Filter By:</span>
          <select
            className="gamesList__filters--select"
            name="genre"
            onChange={(e) => setFilter(e.target.value)}
            id="genre"
          >
            <option className="gamesList__filters--options" value="">
              All games
            </option>
            {genres.map((item) => (
                <option
                  className="gamesList__filters--options"
                  key={item.id}
                  value={item.id}
                >
                  {item.genreName}
                </option>
              ))}
          </select>
      </div>
      <div className="gamesList__games">
        {games.map((game) => <GamesCard key={game.id} game={game} />)}
      </div>
    </main>
  );
}