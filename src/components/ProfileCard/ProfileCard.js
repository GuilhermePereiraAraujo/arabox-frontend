import React from 'react';
export default function ProfileCard({profile}){
    return(
        <div className="card">
            <h1 className="card__title">{profile.nome}</h1>
            <img src={profile.avatarUrl} alt={profile.nome} width="200" />
        </div>
    );
}