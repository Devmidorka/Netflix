import endpoints from "./endpoints";
import axios from "axios";

const getUpcomingMovies = () => {
    return axios.get(endpoints.upcomingMovies)
}

export default getUpcomingMovies