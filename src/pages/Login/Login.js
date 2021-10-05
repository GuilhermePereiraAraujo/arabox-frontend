import React from "react";
import { UserList } from "../../components/UserList/UserList";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login(){

    return (
        <div className="userWrapper">
            <UserList/>
            <div className="loginData">
            <LoginForm/>
            </div>
        </div>
    );
    
}