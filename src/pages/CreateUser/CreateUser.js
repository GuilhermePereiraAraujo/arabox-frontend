import { useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../api/Api";

const newUserData = {
    name: "",
    surname: "",
    email: "",
    cpf: "",
    senha: "",
    isAdmin: false,    
};

export default function CreateUser(){
    const [data, setData] = useState(newUserData);
    
    const onChange = (event) =>{
        const {name, value} = event.target;
        console.log({name, value});
        setData({...data, [name] : value});
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const payload = data;
        console.log(payload);
        await Api.buildApiPostRequest(Api.createUser(), payload).then(
        (response) =>{
            if(response.status !== 201) {
                throw new Error(response.text);
            }
            toast.success("User registered!");
        })
        .catch((err) => {
            console.log(err);
            toast.error("Failed user registry!");
        });
    };

    return(
    <div className="createUser">
      <form className="createUser__form" onSubmit={handleSubmit}>
        <div className="createUser__form--box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            name="name"
            value={data.name}
            onChange={onChange}
            id="name"
          />
        </div>
        <div className="createUser__form--box">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            required
            name="surname"
            value={data.surname}
            onChange={onChange}
            id="surname"
          />
        </div>
        <div className="createUser__form--box">
          <label htmlFor="email">email</label>
          <input
            type="text"
            required
            name="email"
            value={data.email}
            onChange={onChange}
            id="email"
          />
        </div>
        <div className="createUser__form--box">
          <label htmlFor="senha">password</label>
          <input
            type="password"
            required
            name="senha"
            value={data.senha}
            onChange={onChange}
            id="senha"
          />
        </div>
        <div className="createUser__form--box">
          <label htmlFor="cpf">cpf</label>
          <input
            type="text"
            required
            name="cpf"
            value={data.cpf}
            onChange={onChange}
            id="cpf"
          />
        </div>        
        
        <input type="submit" value="Add" />
      </form>
    </div>  
    )
}