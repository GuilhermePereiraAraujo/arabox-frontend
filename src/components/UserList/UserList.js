import { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import LoginForm from "../LoginForm/LoginForm";
//import UserCard from "../UserCard/UserCard";

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
        <div>
            {users.map((user) => (
                <div className="formWrapper" key={`${user.name}`}>
                <LoginForm user={user} />
                </div>
            ))}
            <div className="formWrapper">
            <p className="cardTitle">New User</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRffEfuvuPp3O1DNDq3qHvSYKPFINLuqBSQ&usqp=CAU" alt="addPlayer" className="cardImage"/>         
            </div>
        </div>
    );
}