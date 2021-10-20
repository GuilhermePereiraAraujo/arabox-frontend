import { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function CreateGenreOption(){
    
    const [isAdmin, setIsAdmin] = useState(undefined);
    

    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readCurrentUser(), true);
        
            const bodyResult = await response.json();

            setIsAdmin(bodyResult.user.isAdmin);
            
            //console.log(bodyResult.user.id);
        };
        loadData();
    }, []);
    
    return(
        <div>{
            isAdmin? (<a href={`/creategenre`}>Create Genre</a>):(<></>)
        }
        </div>
    )
}