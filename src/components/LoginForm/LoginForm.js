import { Api } from "../../api/Api";
import React from "react";
import { useHistory } from "react-router-dom";

export default function LoginForm(props){
    
    let history = useHistory(props);
    const handleSubmit = async event => {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const payload = {
        email,
        senha,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const bodyResult = await response.json();

    localStorage.setItem("JWT", bodyResult.accessToken);

    history.push("/profiles");
    };

    return (
        <div className = "formWrapper"  >
            <form className="loginData__form form" onSubmit={handleSubmit} style={{ backgroundImage: `url(${props.user.avatarUrl})`}}>
                <label htmlFor="email" className="form__label">
                    E-mail:
                </label>
                <br />

                <input
                    type="text"
                    name="email"
                    className="form__input"
                />

                <br />

                <label htmlFor="senha" className="form__label">
                    Senha:
                </label>
                <br />

                <input
                    type="password"
                    name="senha"
                    className="form__input"
                />

                <br />

                <input
                    type="submit"
                    value="Login"
                    className="form__submit button"
                />
            </form>
        </div>        
    )
}