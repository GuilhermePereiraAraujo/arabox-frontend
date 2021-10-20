import React from "react";
import { Api } from "../../api/Api";
import { JwtHandler } from "../../Jwthandler/Jwthandler";

export default function Login(props){
    
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
        


        if(response.status === 200) {
            const accessToken = bodyResult.accessToken;
            JwtHandler.setJwt(accessToken);
            props.history.push(`/profiles`);
        }
    };

    return (
        <div className = "formWrapper"  >
            <form className="loginData__form form" onSubmit={handleSubmit}>
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
    );
    
}