import endpoints from "./endpoints";
import axios from "axios";

const getPopularMovies = () => {
    return axios.get(endpoints.popularMovies)
}

export default getPopularMovies