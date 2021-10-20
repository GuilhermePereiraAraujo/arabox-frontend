import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { JwtHandler } from "../../Jwthandler/Jwthandler";


export default function LogOut() {
    useEffect(() => {
        JwtHandler.clearJwt();
        localStorage.clear();
    });

    return <Redirect to="/" />;
}