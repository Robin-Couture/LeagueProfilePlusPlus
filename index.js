//query des images des champs https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/Zeri.png

const btnPrincipal = document.getElementById("btnPrincipal");
const txtPrincipal = document.getElementById("txtPrincipal");

const imgChampion1 = document.getElementById("imgChampion1");
const masteryChampion1 = document.getElementById("masteryChampion1");
const ptsChampion1 = document.getElementById("ptsChampion1");

let summonerEncryptedID;

function txtChange(txtID, txt) {
    const texte = document.getElementById(txtID);
    texte.textContent = txt;
}

function getValue() {
    const summonerName = document.getElementById("name").value;

    //Fonction pour obtenir le summoner ID à partir du nom d'invocateur.
    function fetchSummonerID() {
        return fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-ab6a43e3-4f3d-42e6-abd2-00537c7ccc4c`)
    }    
    
    //Vérifie que j'ai bien un pseudo mis dans ma barre de recherche.
    if(summonerName === ""){
        alert("Veuillez saisir un nom d'invocateur");
        return;
    } else {
        //Permet d'afficher du contenu caché avant la recherche
        txtPrincipal.style = "";        

        //Permet d'afficher la fiche d'un joueur qui contient des infos utiles à partir du summoner ID.
        const summonerInfo = fetchSummonerID().then((httpResponseSummID) => {
            console.log('httpResponseSummID:', httpResponseSummID);
            return httpResponseSummID.json();
        }).then((summonerID) => { //Permet de récupérer l'encrypted summoner id.
            console.log('summonerID', summonerID);
            summonerEncryptedID = summonerID.id;
            txtPrincipal.textContent = `Invocateur encrypted ID : ${summonerEncryptedID}`;

            function fetchSummonerMastery() {
                summonerEncryptedID = summonerEncryptedID;
                return fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/s3NgH7raq81DQuqz3ETmI58WpT1HMHT0Jg0vNUSILhPZEDA?api_key=RGAPI-ab6a43e3-4f3d-42e6-abd2-00537c7ccc4c`);
            }
    
            masteryInfo = fetchSummonerMastery().then((httpResponseMastery) => {
                console.log('httpResponseMastery', httpResponseMastery);
                return httpResponseMastery.json();
            }).then((summonerMastery) => {
                console.log('summoner mastery', summonerMastery);

                let infoImg = [];
                let infoLevel = [];
                let infoPts = [];

                for(index = 0; index < 5; index++){
                    infoImg.push(summonerMastery[index].championId);
                    infoLevel.push(summonerMastery[index].championLevel);
                    infoPts.push(summonerMastery[index].championPoints);
                }

                imgChampion1.textContent = infoImg[0];
                masteryChampion1.textContent = infoLevel[0];
                ptsChampion1.textContent = infoPts[0];
            })
        })

        

        
    }
}



