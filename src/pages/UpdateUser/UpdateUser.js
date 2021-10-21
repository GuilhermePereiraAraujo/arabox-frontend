import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function UpdateUser(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loaduser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readCurrentUser(),
        true,
      );
      const result = await response.json();
      console.log(result);
      setUser(result.user);
    };
    loaduser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async event => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const cpf = event.target.cpf.value;

    const payload = {
      name,
      surname,
      email,
      cpf,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateUser(user.id),
      payload,
    );

    if (response.status === 200) {
      console.log("Deu certo");

      //history.push(`/user/${id}`);
    } else {
      //error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label className="form__label" htmlFor="name">
            Name:
          </label>
        </div>
        <div>
          <input
            className="form__input-text"
            type="text"
            id="name"
            name="name"
            defaultValue={user.name}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="surname">
            Surname:
          </label>
        </div>
        <div>
          <input
            className="form__input-text"
            type="text"
            id="surname"
            name="surname"
            defaultValue={user.surname}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="email">
            email:
          </label>
        </div>
        <div>
          <input
            className="form__input-text"
            type="text"
            id="email"
            name="email"
            defaultValue={user.email}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="cpf">
            CPF:
          </label>
        </div>
        <div>
          <input
            className="form__input-number"
            type="text"
            id="cpf"
            name="cpf"
            defaultValue={user.cpf}
          />
        </div>
        <input type="submit" value="Edit" />
      </form>
    </div>
  );
};