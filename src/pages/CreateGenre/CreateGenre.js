import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { toast } from "react-toastify";
const newGenreData = {
    genreName: "",
};
export default function CreateGenre(){

    const [data, setData] = useState(newGenreData);

    const onChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            ...data,
        };
        console.log(payload);
        await Api.buildApiPostRequest(Api.createGenre(), payload)
        .then((response) => {
            if(response.status !== 201) {
                throw new Error(response.text);
            }
            toast.success("Genre registered!");
        })
        .catch((err) => {
            console.log(err);
            toast.error("Failed genre registry!");
        });
    };
    return (
    <div className="CreateGenres">
      <form className="CreateGenres__form" onSubmit={handleSubmit}>
        <div className="CreateGenres__form--box">
          <label htmlFor="genreName">New Genre</label>
          <input
            type="text"
            required
            name="genreName"
            value={data.genreName}
            onChange={onChange}
            id="genreName"
          />
        </div>
      </form>
    </div>
    );
};