import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "379b7cbb-784d-43e8-9e3f-e087aca37ae9"}
})

export const getUsers = (currentPage = 1, PageSize = 10) =>{
    return instance.get(`users?page=${currentPage}&count=${PageSize}`)
        .then(response =>response.data);
}
