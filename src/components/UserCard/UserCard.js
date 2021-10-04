import React from 'react';
export default function UserCard({user}){
    return(
        <div className="card">
            <h1 className="card__title">{user.nome}</h1>
            <img src={user.avatarUrl} alt={user.nome} width="200" />
        </div>
    );
}