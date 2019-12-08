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

export const authMe = () =>{

    return instance.get(`auth/me`).then(response => response.data);

}

export const getProfile = (userID) =>{
    console.warn('Используется новые метод. Пожайлуста используйте объект - profileAPI');
    return profileAPI.getProfile(userID);
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID).then(response => response.data);
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status}).then(response => response.data);
    }
}

export const authAPI ={
    login(email, password, rememberme = false) {
        return instance.post(`auth/login`, {email, password, rememberme}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}
