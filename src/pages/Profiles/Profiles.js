import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import add from "../../components/GamesList/add.png"
import { JwtHandler } from "../../Jwthandler/Jwthandler";

export default function Profiles(){
    const [profiles, setprofiles] = useState([]);

    const auth = Boolean(JwtHandler.getJwt());

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readCurrentUser(), auth);
        
            const bodyResult = await response.json();

            setprofiles(bodyResult.user.profiles);
        };
        loadData();
    }, []);

    const saveProfile = (profile) => {
        localStorage.setItem("profile", JSON.stringify(profile));
    }

    return(
        <div className="profileCards">
            {profiles.map((profile, index) => (
                <Link to={`/mygames/${profile.id}`}   onClick={() => {saveProfile(profile)}} key={index}>
                    <div className="card">
                        <h1 className="card__title">{profile.nome}</h1>
                        <img src={profile.avatarUrl} alt={profile.nome} width="200"/>
                    </div>
                </Link>
            ))}
            <Link to={`/createprofile`}>
                <div className="card wrapper" >
                    <img src={add} className="cardImage"/>
                    <p className="addProfile">New Profile</p>
                </div>
            </Link>
        </div>
    );
}