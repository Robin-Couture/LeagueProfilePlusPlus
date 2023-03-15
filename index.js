const btnPrincipal = document.getElementById("btnPrincipal");
const txtPrincipal = document.getElementById("txtPrincipal");

function txtChange(txtID, txt) {
    const texte = document.getElementById(txtID);
    texte.textContent = txt;
}

function getValue() {
    const summonerName = document.getElementById("name").value;

    function fetchSummonerID() {
        return fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-ab6a43e3-4f3d-42e6-abd2-00537c7ccc4c`)
    }
    
    if(summonerName === ""){
        alert("Veuillez saisir un nom d'invocateur");
        return;
    } else {
        txtPrincipal.style = "";        

        const summonerInfo = fetchSummonerID().then((httpResponse) => {
            console.log('httpResponse:', httpResponse);
            return httpResponse.json();
        }).then((summonerID) => {
            console.log(summonerID);
            const summonerEncryptedID = summonerID.id;
            txtPrincipal.textContent = `Invocateur encrypted ID : ${summonerEncryptedID}`;

            return summonerEncryptedID;
        })

        console.log(summonerEncryptedID);
    }
}



