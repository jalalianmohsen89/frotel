import axios from "axios";
import JwtService from "./jwt.service";

const ApiService = {

    init() {
        axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
    },

    setHeader() {
        axios.defaults.headers.common[
            "Authorization"
            ] = `Token ${JwtService.getToken()}`;
    },

    query(resource, params) {
        return axios.get(resource, params).catch(error => {
            // console.log(error);
            throw new Error(`ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        return axios.get(`${resource}/${slug}`).catch(error => {
            // console.log(error);
            throw new Error(`ApiService ${error}`);
        });
    },

    post(resource, params) {
        return axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return axios.put(`${resource}`, params);
    },

    delete(resource) {
        return axios.delete(resource).catch(error => {
            // console.log(error);
            throw new Error(`ApiService ${error}`);
        });
    }
};

export default ApiService;
