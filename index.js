//query des images des champs https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/Zeri.png

const champNom = document.getElementById("name");
const champApi = document.getElementById("API_Key");
const lienRiotApi = document.getElementById("lienRiotApi");

const btnPrincipal = document.getElementById("btnPrincipal");
const txtPrincipal = document.getElementById("txtPrincipal");
const tableauMastery = document.getElementById("tableauMastery");

const imgChampion1 = document.getElementById("imgChampion1");
const nomChampion1 = document.getElementById("nameChampion1");
const masteryChampion1 = document.getElementById("masteryChampion1");
const ptsChampion1 = document.getElementById("ptsChampion1");

const imgChampion2 = document.getElementById("imgChampion2");
const nomChampion2 = document.getElementById("nameChampion2");
const masteryChampion2 = document.getElementById("masteryChampion2");
const ptsChampion2 = document.getElementById("ptsChampion2");

const imgChampion3 = document.getElementById("imgChampion3");
const nomChampion3 = document.getElementById("nameChampion3");
const masteryChampion3 = document.getElementById("masteryChampion3");
const ptsChampion3 = document.getElementById("ptsChampion3");

const imgChampion4 = document.getElementById("imgChampion4");
const nomChampion4 = document.getElementById("nameChampion4");
const masteryChampion4 = document.getElementById("masteryChampion4");
const ptsChampion4 = document.getElementById("ptsChampion4");

const imgChampion5 = document.getElementById("imgChampion5");
const nomChampion5 = document.getElementById("nameChampion5");
const masteryChampion5 = document.getElementById("masteryChampion5");
const ptsChampion5 = document.getElementById("ptsChampion5");

let summonerEncryptedID;

function txtChange(txtID, txt) {
    const texte = document.getElementById(txtID);
    texte.textContent = txt;
}

function getValue() {
    const summonerName = champNom.value;
    const apiKey = champApi.value;

    //Fonction pour obtenir le summoner ID à partir du nom d'invocateur.
    function fetchSummonerID() {
        return fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`)
    }    
    
    //Vérifie que j'ai bien un pseudo mis dans ma barre de recherche.
    if(summonerName === "" || apiKey === ""){
        if(summonerName === '') alert("Veuillez saisir un nom d'invocateur");
        if(apiKey === '') alert("Veuillez saisir une clé API");
        
        return;
    } else {
        //Permet d'afficher du contenu caché avant la recherche
        txtPrincipal.style = "";
        tableauMastery.style = "";
        btnPrincipal.style = "display: none";
        champNom.style = "display: none";
        champApi.style = "display: none";
        lienRiotApi.style = "display: none";

        //Permet d'afficher la fiche d'un joueur qui contient des infos utiles à partir du summoner ID.
        const summonerInfo = fetchSummonerID().then((httpResponseSummID) => {
            console.log('httpResponseSummID:', httpResponseSummID);
            return httpResponseSummID.json();
        }).then((summonerID) => { //Permet de récupérer l'encrypted summoner id.
            console.log('summonerID', summonerID);
            summonerEncryptedID = summonerID.id;
            txtPrincipal.textContent = `Vous regardez le profil de ${summonerName}`;

            function fetchSummonerMastery(EncryptedSummonerID) {
                summonerEncryptedID = EncryptedSummonerID;
                return fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerEncryptedID}?api_key=${apiKey}`);
            }
    
            masteryInfo = fetchSummonerMastery(summonerEncryptedID).then((httpResponseMastery) => {
                console.log('httpResponseMastery', httpResponseMastery);
                return httpResponseMastery.json();
            }).then((summonerMastery) => {
                console.log('summoner mastery', summonerMastery);

                let infoImg = [];
                let infoNom = [];
                let infoLevel = [];
                let infoPts = [];

                for(index = 0; index < 5; index++){
                    infoNom.push(summonerMastery[index].championId);
                    infoLevel.push(summonerMastery[index].championLevel);
                    infoPts.push(summonerMastery[index].championPoints);
                }

                champions = fetch('/src/json/champion.json').then((httpResponseChampion) => {
                    return httpResponseChampion.json();
                }).then((championList) => {
                    championData = championList.data;
                    championList = Object.values(championData);

                    function findChampionName(liste, numLigne) {
                        for(index = 0; index < championList.length; index++){                            
                            if(liste[index]['key'] == infoNom[numLigne - 1]){
                                infoNom[numLigne - 1] = liste[index]['id']
                            }
                        }
                        

                        return infoNom[numLigne - 1];
                    }


                    nomChampion1.textContent = findChampionName(championList, 1);
                    infoImg.push(`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${nomChampion1.textContent}.png`)

                    nomChampion2.textContent = findChampionName(championList, 2);
                    infoImg.push(`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${nomChampion2.textContent}.png`)

                    nomChampion3.textContent = findChampionName(championList, 3);
                    infoImg.push(`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${nomChampion3.textContent}.png`)

                    nomChampion4.textContent = findChampionName(championList, 4);
                    infoImg.push(`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${nomChampion4.textContent}.png`)

                    nomChampion5.textContent = findChampionName(championList, 5);
                    infoImg.push(`https://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${nomChampion5.textContent}.png`)
                    
                    let img1 = document.createElement("img");
                    img1.src = infoImg[0];
                    img1.height = 50;
                    img1.width = 50;
                    imgChampion1.appendChild(img1);

                    let img2 = document.createElement("img");
                    img2.src = infoImg[1];
                    img2.height = 50;
                    img2.width = 50;
                    imgChampion2.appendChild(img2);

                    let img3 = document.createElement("img");
                    img3.src = infoImg[2];
                    img3.height = 50;
                    img3.width = 50;
                    imgChampion3.appendChild(img3);

                    let img4 = document.createElement("img");
                    img4.src = infoImg[3];
                    img4.height = 50;
                    img4.width = 50;
                    imgChampion4.appendChild(img4);

                    let img5 = document.createElement("img");
                    img5.src = infoImg[4];
                    img5.height = 50;
                    img5.width = 50;
                    imgChampion5.appendChild(img5);

                })

                masteryChampion1.textContent = infoLevel[0];
                ptsChampion1.textContent = infoPts[0];

                masteryChampion2.textContent = infoLevel[1];
                ptsChampion2.textContent = infoPts[1];

                masteryChampion3.textContent = infoLevel[2];
                ptsChampion3.textContent = infoPts[2];

                masteryChampion4.textContent = infoLevel[3];
                ptsChampion4.textContent = infoPts[3];

                masteryChampion5.textContent = infoLevel[4];
                ptsChampion5.textContent = infoPts[4];
            })
        })

        

        
    }
}



