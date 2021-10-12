import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import ProfileCard from "../ProfileCard/ProfileCard";

export function ProfileList(){
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
                    <ProfileCard profile={profile} ></ProfileCard>
                </Link>
            ))}
        </div>
    );
}