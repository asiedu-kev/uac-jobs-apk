import  axios from "axios";

const API_TOKEN="bc1d1958e4722cbb763b82ab82843a91"

export function getFilmsFromApiWithSearchText(text,page){
    const url='https://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN+'&language=fr&query='+ text + '&page=' + page;
    return axios.get(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFilmDetailFromApi (id) {
  return axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getArticles (){
    const url = '192.168.1.111:8000/api/articles/' ;
    return fetch(url)
    .then((reponse) => response.json)
    .catch((error) => console.error(error))
}

export function getOpportunities () {
    const url = '192.168.1.111:8000/api/opportunities/';
    return fetch(url)
    .then((reponse) => response.json())
    .catch((error) => console.error(error))
}
