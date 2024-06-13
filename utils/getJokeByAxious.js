import axios from "axios";

export default async function getJoke() {
   return axios.get('https://api.chucknorris.io/jokes/random')
}
