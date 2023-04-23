import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "d15fd2d3919f45c688ddeb8091e60716"
    }
});