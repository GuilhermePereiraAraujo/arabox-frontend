import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import { JwtHandler } from "../../Jwthandler/Jwthandler";
import LogOut from "../LogOut/LogOut";

export default function Header(){
    
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);
    
    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };

        window.addEventListener("onJwtChange", handleOnJwtChange);

        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);

    return(
        <div className="header">
            <div className="logo-container">
                <img id="logo" src="https://www.vhv.rs/dpng/d/452-4521773_borderlands-vault-png-download-transparent-borderlands-vault-symbol.png" alt="logo"></img>
            </div>
                <Link to="/"><p className="name"> Arabox </p></Link>
            <nav>
                <ul>
                    <li>
                        {isLogged?
                            (<a href="/logout">Log Out</a>)
                            :(<a href="/login">Log in</a>)
                        }
                    </li>
                    <li><a href="/createuser">Sign up</a></li>
                    <li><img id="profileImg" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OLk4LF5ua5W-mPqOmGRMG7uDtOQSahuymiw0NUs8W8S5hpE36g3bInnIzOY-UWE0Yi0&usqp=CAU" alt="profileImg"></img></li>
                </ul>
            </nav>
        </div>
    )
}