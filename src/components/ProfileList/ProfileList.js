import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import ProfileCard from "../ProfileCard/ProfileCard";

export function ProfileList(){
    const [profiles, setprofiles] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllProfiles(), true);
        
            const bodyResult = await response.json();

            setprofiles
            (bodyResult);
        };

        loadData();

    }, []);

    return(
        <div className="profileCards">
            {profiles.map((profile, index) => (
                <Link to={'/games'}>
                    <ProfileCard profile={profile} key={index}></ProfileCard>
                </Link>
            ))}
        </div>
    );
}