import axios from "axios";

// add the server adress  at 192.168.1.111:8000 when wanna use a real server

export function getArticles() {
  const url = "192.168.1.111:8000/api/articles/";
  return fetch(url)
    .then((reponse) => response.json)
    .catch((error) => console.error(error));
}

export function getOpportunities() {
  const url = "192.168.1.111:8000/api/opportunities/";
  return fetch(url)
    .then((reponse) => response.json())
    .catch((error) => console.error(error));
}
