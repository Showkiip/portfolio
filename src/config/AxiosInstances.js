// import { ChangeLoading } from '../Screens/Shared/Store/sharedSlice';
import axios from 'axios';
// import store from '../Store/index';
import baseURL from './baseURL';
// import { Logout } from '../Screens/Auth/Store/authSlice';
import { toast } from 'react-toastify';

export const apiInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        'Accept': 'Application/json',
        'Access-Control-Max-Age': 0
    }
})

apiInstance.interceptors.request.use(function (config) {
    // store.dispatch(ChangeLoading(true))
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // console.log("CONFIG")
    // console.log(config)
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiInstance.interceptors.response.use(function (response) {
    // store.dispatch(ChangeLoading(false))
    return response;
}, function (error) {
    // store.dispatch(ChangeLoading(false))
    const { data, status } = error.response
    console.info(data)
    console.info(status)
    if (status == 401) {
        if (data.message == "Unauthenticated.") {
            toast("Your token was expired, login again to use app")
            // store.dispatch(Logout())
        }
    }
    return Promise.reject(error);
});

export const apiNoLoaderInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        'Accept': 'Application/json',
    }
})

apiNoLoaderInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiNoLoaderInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const { data, status } = error.response
    console.info(status)
    console.info(data)
    if (status == 401) {
        if (data.message.includes("Unauthenticated.")) {
            // toast("Your token was expired, login again to use app") //! called 4 times since in some async thunk there are 4 APIs
            // store.dispatch(Logout())
        }
    }
    return Promise.reject(error);
});