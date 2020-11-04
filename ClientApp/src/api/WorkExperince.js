import axios from "axios";
import config from '../config/config';

const Get = () => {
    return axios.get(`/api/workexperiences`);
};
const Delete = (headers, id) => {
    return axios.post(`/api/workexperiences/delete/` + id, {},
        { headers: headers });
};
const Create = (headers, input) => {
    return axios.post(`/api/workexperiences/create/`, input,
        { headers: headers });
};
const Update = (headers, input, id) => {
    return axios.post(`/api/workexperiences/update/` + id, input,
        { headers: headers });
}
export default {
    Get,
    Delete,
    Create,
    Update
};
