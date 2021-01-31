const API_KEY="WrgDj33K8neSyRSlpL41LpBpCfH3";

//get all the matches

export const getMatches=()=>{
const url='https://cricapi.com/api/matches/?apikey=WrgDj33K8neSyRSlpL41LpBpCfH3';
    return fetch(url).then((response)=>response.json())
    .catch((error)=>console.log("Error : ",error));
};


export const getMatcheDetail=(id)=>{

    const url='https://cricapi.com/api/cricketScore/?apikey=WrgDj33K8neSyRSlpL41LpBpCfH3&unique_id=1231409';
    return fetch(url).then(response=>response.json())
    .catch((error)=>console.log("Error : ",error));
}