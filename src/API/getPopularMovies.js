import requests from "./Requests";
import axios from "axios";

const getPopularMovies = () => {
    return axios.get(requests.requestPopular)
}

export default getPopularMovies