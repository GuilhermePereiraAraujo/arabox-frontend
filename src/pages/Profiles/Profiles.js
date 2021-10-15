import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";

export default function Profiles(){
    const [profiles, setprofiles] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readCurrentUserProfiles(), true);
        
            const bodyResult = await response.json();

            setprofiles(bodyResult.user.profiles);
        };
        loadData();
    }, []);

    return(
        <div className="profileCards">
            {profiles.map((profile, index) => (
                <Link to={'/games'} key={index}>
                    <div className="card">
                        <h1 className="card__title">{profile.nome}</h1>
                        <img src={profile.avatarUrl} alt={profile.nome} width="200"/>
                    </div>
                </Link>
            ))}
        </div>
    );
}