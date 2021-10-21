import { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function EditUser(){
    
    const [id, setId] = useState("");
    

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readCurrentUser(), true);
        
            const bodyResult = await response.json();

            setId(bodyResult.user.id);
            
            //console.log(bodyResult.user.id);
        };
        loadData();
    }, []);
    
    return(
        <a href={`/updateuser/${id}`}>Edit Info</a>
    )
}