import { JwtHandler } from '../Jwthandler/Jwthandler';

export const Api = {
    // Base URL
    baseUrl: 'http://localhost:3000',

    // Login
    loginUrl: () => Api.baseUrl + "/login",

    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt(),
    }),
    
    // Funções de Requisição User
    readAllUsers: () => Api.baseUrl + "/user",
    readOneUser: (id) => Api.baseUrl + `/user/${id}`,
    createUser: () => Api.baseUrl + "/user",

    // Funções de Requisição Profiles
    readCurrentUser: () => Api.baseUrl + "/user/currentUser",
    readAllProfiles: () => Api.baseUrl + "/profile",
    readOneProfile: (id) => Api.baseUrl + `/profile/${id}`,
    createProfile: () => Api.baseUrl + "/profile",

    // Funções de Requisição Games
    readAllGames: () => Api.baseUrl + "/game",
    readGameById: (id) => Api.baseUrl + `/game/${id}`,
    createGame: () => Api.baseUrl + "/game",
    updateGame: (id) => Api.baseUrl + `/game/${id}`,
    deleteGame: (id) => Api.baseUrl + `/game/${id}`,

    readAllGenres: () => Api.baseUrl + "/genre",
    
    // Get
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: "GET",
            headers: auth ? new Headers({ ...Api.authHeader() }) : undefined,
        }),

    // POST
    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),
    
    buildApiPatchRequest: (url, body) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),

    buildApiDeleteRequest: (url, auth) => 
        fetch(url, {
            method: "DELETE",
            headers: auth ? new Headers({ ...Api.authHeader() }) : undefined,
        }),
};