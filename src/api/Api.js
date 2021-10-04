export const Api = {
    // Base URL
    baseUrl: 'http://localhost:3000',

    // Login
    loginUrl: () => Api.baseUrl + "/login",

    authHeader: {
        Authorization: "Bearer " + localStorage.getItem("JWT"),
    },
    
    // Funções de Requisição User
    readAllUsers: () => Api.baseUrl + "/user",
    readOneUser: (id) => Api.baseUrl + `/user/${id}`,
    createUser: () => Api.baseUrl + "/user",

    // Funções de Requisição Profiles
    readAllProfiles: () => Api.baseUrl + "/profile",
    readOneProfile: (id) => Api.baseUrl + `/profile/${id}`,
    createProfile: () => Api.baseUrl + "/profile",

    // Funções de Requisição Games
    readAllGames: () => Api.baseUrl + "/game",
    readOneGame: (id) => Api.baseUrl + `/game/${id}`,
    createGame: () => Api.baseUrl + "/game",
    
    // Get
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: "GET",
            headers: auth ? new Headers({ ...Api.authHeader }) : undefined,
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
};