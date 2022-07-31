import endpoints from "./endpoints";
import axios from "axios";

const getTrendingMovies = () => {
    return axios.get(endpoints.trendingMovies)
}

export default getTrendingMovies