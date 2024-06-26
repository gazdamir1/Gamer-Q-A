import axios from "axios";

const baseApiClient=axios.create({
    baseURL:'https://localhost:7219'
})

export default baseApiClient;