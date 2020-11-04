import axios from "axios";
import config from '../config/config';
const Get = () => {
    return axios.get(`/api/projects`);
};
const Create = (input, headers) => {
    return axios
        .post(
            "/api/projects/create",
            input,
            {
                headers: headers,
            }
        )
}
const Delete = (input, id, headers) => {
    return axios
        .delete(
            "/api/projects/delete/" + id,
            input,
            {
                headers: headers,
            }
        )
}
const Update = (input, id, headers) => {
    return axios
        .post(
            "/api/projects/update/" + id,
            input,
            {
                headers: headers,
            }
        )
}
export default {
    Get,
    Create,
    Delete,
    Update
};
