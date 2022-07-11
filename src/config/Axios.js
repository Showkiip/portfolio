import axios from "axios";
// import toaster from "toastr";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const responseSuccessHandler = (response) => {
    return response;
};

axios.interceptors.request.use(
    function (successfulReq) {
        return successfulReq;
    },
    function (error) {
        // toaster["error"]("Request failed, Server Error!");
        Promise.reject(error);
    }
);

const responseErrorHandler = (error) => {
    // if (!navigator.onLine) {
    //     toaster["error"]("Request failed, Please check your network connection!");
    // }

    // if (error && error.response && error.response.status === 401) {
    //     if (error.response.status === 401) {
    //         // localStorage.removeItem("persist:root");
    //         // localStorage.removeItem("authUser");
    //         toaster['error'](error.response.data.message, error)
    //         window.location = "/auth/login";
    //     }
    // }
    // if (error && error.response && error.response.status === 403) {
    //     // toaster["warning"](error.response.data.message, 'Un-Authorized');
    // }
    // if (error && error.response && error.response.status === 422) {
    //     toaster["success"](error.response.data.message, 'Validation errors');
    // }

    // if (error && error.response && error.response.status === 404) {
    //     toaster["info"](error.response.data.message, 'Not Found');
    // }
    // if (error && error.response && error.response.status > 404 && error.response.status !== 422) {
    //     toaster["error"](error.response.data.message);
    // }

    return Promise.reject(error);
};

instance.interceptors.response.use(
    (response) => responseSuccessHandler(response),
    (error) => responseErrorHandler(error)
);

export default instance;