import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../api/Api";

const newProfileData = {
  nickname : "",
  avatarUrl: "",
  userId: "",
};

export default function CreateProfile(){
    const [data, setData] = useState(newProfileData);
    const auth = Boolean(localStorage.getItem("JWT"));
   
    const loadUserId = async() =>{
        const response = await Api.buildApiGetRequest(Api.readCurrentUser(),auth);
        const result = await response.json();
        data.userId = +result.user.id;
        console.log(result.user.id);
    }

    useEffect(() => {loadUserId()});

    const onChange = (event) =>{
        const {name, value} = event.target;
        //console.log({name, value});
        setData({...data, [name] : value});
        //console.log(data);
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const payload = data;
        console.log(payload);
        await Api.buildApiPostRequest(Api.createProfile(), payload).
        then((response) =>{
            if(response.status !== 200) {
                throw new Error(response.text);
            }
            toast.success("Profile registered!");
        })
        .catch((err) => {
            console.log(err);
            toast.error("Failed profile registry!");
        });
    };

    return (
    <div className="createProfiles">
      <form className="createProfiles__form" onSubmit={handleSubmit}>
        <div className="createProfiles__form--box">
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            required
            name="nickname"
            value={data.nickname}
            onChange={onChange}
            id="nickname"
          />
        </div>
        <div className="createProfiles__form--box">
          <label htmlFor="avatarUrl">Avatar</label>
          <input
            type="url"
            required
            name="avatarUrl"
            value={data.avatarUrl}
            onChange={onChange}
            id="avatarUrl"
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
    );

}