import { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import UserCard from "../UserCard/UserCard";

export function UserList(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUsers(), true);
        
            const bodyResult = await response.json();

            setUsers(bodyResult);
        };

        loadData();

    }, []);

    return(
        <div className="userCards">
            {users.map((user, index) => (
                <UserCard user={user} key={index}></UserCard>
            ))}
        </div>
    );
}