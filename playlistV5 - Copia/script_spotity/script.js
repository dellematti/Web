// const client_id = "<Client ID>"
// const client_secret = "<Client Secret>"

const client_id = "<01b0fce0f670452fba1577e7fbdad307>"
const client_secret = "<d9c85f1c2ee84aac8e45d80c44e1a0ea>"
var url = "https://accounts.spotify.com/api/token"
fetch(url, {
    method: "POST",
    headers: {
        Authorization: "Basic " + btoa(`${client_id}:${client_secret}`),
        "Content-Type": "application/x-www-form-urlencoded",
    },

    body: new URLSearchParams({ grant_type: "client_credentials" }),
})
    .then((response) => response.json())
    .then((tokenResponse) =>
        console.log(tokenResponse.access_token)
        //Sarebbe opportuno salvare il token nel local storage
    )



    //per ora ho salvato come script direttamente in indexV3





