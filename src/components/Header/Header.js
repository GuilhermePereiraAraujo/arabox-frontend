import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../Jwthandler/Jwthandler";
import CreateGenreOption from "./CreateGenreOption";
import EditUser from "./EditUser";
import logo from "./logo.png";

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
                <img id="logo" src={logo} alt="logo"></img>
            </div>
            <Link to="/"><h1 className="name"> Arabox </h1></Link>
            <nav>
                        {isLogged?
                            (
                            <ul>
                                <li><a href="/logout">Log Out</a></li>
                                <li><EditUser/></li>
                                <li><CreateGenreOption/></li>
                                <li><Link to="/mygames"><FaStar/></Link></li>
                            </ul>
                            )
                            :(
                            <ul>
                                <li><a href="/login">Log in</a></li>
                                <li><a href="/createuser">Sign up</a></li>
                            </ul>
                            )
                        }
            </nav>
        </div>
    )
}