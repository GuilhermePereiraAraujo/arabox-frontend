import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function UpdateGame(props){
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

    if(!game){
        return <div>Loading...</div>;
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const title = event.target.title.value;
        const imageUrl = event.target.imageUrl.value;
        const description = event.target.description.value;
        const year = +event.target.year.value;
        const imdbScore = +event.target.imdbScore.value;
        const ytTrailerLink = event.target.ytTrailerLink.value;
        const gameplayLink = event.target.gameplayLink.value;
        const genreName = event.target.genreName.value;

        const payload = {
            title,
            imageUrl,
            description,
            year,
            imdbScore,
            ytTrailerLink,
            gameplayLink,
            genres: [
                {
                genreName: genreName,
                },
            ],

    };

    const response = await Api.buildApiPatchRequest(
        Api.updateGame(id),
        payload,
    );

    const body = await response.json();

    if(response.status === 200){
        const id = body.id;

        props.history.push(`/game/${id}`);
    }else{
        //error message
    }
};

return(
    <div>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label className="form__label" htmlFor="title">
                    Title:
                </label>
            </div>
            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={game.title}
                />
            </div>
            <div>
                <label className="form__label" htmlFor="imageUrl">
                    ImageUrl:
                </label>
            </div>
            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    defaultValue={game.imageUrl}
                />
            </div>
            <div>
                <label className="form__label" htmlFor="description">
                    Description:
                </label>
            </div>
            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="description"
                    name="description"
                    defaultValue={game.description}
                />
            </div>
            <div>
                <label className="form__label" htmlFor="year">
                    Year:
                </label>
            </div>
            <div>
                <input
                    className="form__input-number"
                    type="number"
                    id="year"
                    name="year"
                    defaultValue={game.year}
                />
            </div>
            <div>
                <label className="form__label" htmlFor="imdbScore">
                    ScoreIMDB:
                </label>
            </div>
            <div>
                <input
                    className="form__input-number"
                    type="number" step="0.1"
                    id="imdbScore"
                    name="imdbScore"
                    defaultValue={game.imdbScore}
                />
            </div>
            <div>
                <label className="form__label" htmlFor="ytTrailerLink">
                    Trailer Link:
                </label>
            </div>
            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="ytTrailerLink"
                    name="ytTrailerLink"
                    defaultValue={game.ytTrailerLink}
                />
            </div>
            <div>
                <label className="form__label" htmlFor="gameplayLink">
                    Gameplay Link:
                </label>
            </div>
            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="gameplayLink"
                    name="gameplayLink"
                    defaultValue={game.gameplayLink}
                />
            </div>
            <div>
                    <label className="form__label" htmlFor="genre">
                        Genres:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="genreName"
                        name="genreName"
                        defaultValue={game.genres}
                    />
                </div>
                <input
                    className="form__submit button button--primary"
                    type="submit"
                    value="Edit"
                />       
        </form>
    </div>
)

};