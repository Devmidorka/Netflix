import endpoints from "./endpoints";
import axios from "axios";

const getHorrorMovies = () => {
    return axios.get(endpoints.horrorMovies)
}

export default getHorrorMovies