import endpoints from "./endpoints";
import axios from "axios";

const getTopRatedMovies = () => {
    return axios.get(endpoints.topRatedMovies)
}

export default getTopRatedMovies