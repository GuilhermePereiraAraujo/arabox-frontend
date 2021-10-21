import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../api/Api";
const newGameData = {
  title: "",
  imageUrl: "",
  description: "",
  year: "",
  imdbScore: "",
  ytTrailerLink: "",
  gameplayLink: "",
  genreIds: "",
};
export default function CreateGame() {
  const [data, setData] = useState(newGameData);
  const [genre, setGenre] = useState([]);

  const loadGenres = async () => {
    await Api.buildApiGetRequest(Api.readAllGenres())
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(response => {
        setGenre(response);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  useEffect(() => {
    loadGenres();
  }, []);

  const onChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      ...data,
      year: +data.year,
      imdbScore: +data.imdbScore,
      genreIds: [+data.genreIds],
    };
    console.log(payload);
    await Api.buildApiPostRequest(Api.createGame(), payload)
      .then(response => {
        if (response.status !== 201) {
          throw new Error(response.text);
        }
        toast.success("Game registered!");
      })
      .catch(err => {
        console.log(err);
        toast.error("Failed game registry!");
      });
  };
  return (
    <div className="createGames">
      <form className="createGames__form" onSubmit={handleSubmit}>
        <div className="createGames__form--box">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            name="title"
            value={data.title}
            onChange={onChange}
            id="title"
          />
        </div>
        <div className="createGames__form--box">
          <label htmlFor="imageUrl">Cover</label>
          <input
            type="url"
            required
            name="imageUrl"
            value={data.imageUrl}
            onChange={onChange}
            id="imageUrl"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            required
            name="description"
            value={data.description}
            onChange={onChange}
            id="description"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="year">Launch Year</label>
          <input
            type="number"
            required
            name="year"
            value={data.year}
            onChange={onChange}
            id="year"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="imdbScore">IMDB Score</label>
          <input
            type="number"
            required
            name="imdbScore"
            value={data.imdbScore}
            onChange={onChange}
            id="imdbScore"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="ytTrailerLink">Trailer</label>
          <input
            type="text"
            required
            name="ytTrailerLink"
            value={data.ytTrailerLink}
            onChange={onChange}
            id="ytTrailerLink"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="gameplayLink">Gameplay</label>
          <input
            type="text"
            required
            name="gameplayLink"
            value={data.gameplayLink}
            onChange={onChange}
            id="gameplayLink"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="genres">Select a Genre</label>
          <select
            name="genreIds"
            onChange={onChange}
            value={data.genreIds}
            id="genreIds"
          >
            <option value="">Genres</option>
            {genre &&
              genre.map(item => (
                <option key={item.id} value={item.id}>
                  {item.genreName}
                </option>
              ))}
          </select>
        </div>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
