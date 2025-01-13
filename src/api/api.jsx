import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "7a0a4f0ee3d742ad2e0225406c4a5fd9";

const endpoint = {
    originals: "/discover/tv",
    trending: "/trending/all/day",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming"

};

export const fetchingdata = (datagetfetch) =>{
    return axios.get(`${URL}${endpoint[datagetfetch]}?api_key=${API_KEY}`)
}
