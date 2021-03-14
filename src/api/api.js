/* Modules */

import axios from "axios";

/* Instance */

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'a1913126-ce29-4ec2-8694-cfd4881ad145'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

/* Auth */

export const authAPI = {
    me: () => instance.get(`auth/me`).then(response => response.data),
    login: (email, password, rememberMe, captcha) => instance.post(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
    }).then(response => response.data),
    logout: () => instance.delete(`auth/login`).then(response => response.data)
}

/* Profile */

export const profileAPI = {
    getStatus: (id) => instance.get(`profile/status/${id}`).then(response => response.data),
    getProfile: (id) => instance.get(`profile/${id}`).then(response => response.data),
    setStatus: (status) => instance.put(`/profile/status`, {status}).then(response => response.data),
    checkOnFollow: (id) => instance.get(`/follow/${id}`).then(response => response.data),
    follow: (id) => instance.post(`follow/${id}`).then(response => response.data),
    unFollow: (id) => instance.delete(`follow/${id}`).then(response => response.data)
};

/* Users */

export const usersAPI = {
    getFriends: (page, count, term) => instance.get(`/users?count=${count}&page=${page}&friend=${true}${term ? `&term=${term}` : ''}`).then(response => response.data),
    getUsers: (page, count, term) => instance.get(`/users?count=${count}&page=${page}&friend=${false}${term ? `&term=${term}` : ''}`).then(response => response.data)
};