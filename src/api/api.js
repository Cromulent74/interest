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
    getProfile: (id) => instance.get(`profile/${id}`).then(response => response.data)
}