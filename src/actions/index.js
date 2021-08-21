export const setFavourite = payload => ({
    type: "SET_FAVOURITE",
    payload,

});

export const deleteFavourite = payload => ({
    type: "DELETE_FAVOURITE",
    payload,
});

export const loginRequest = payload => ({
    type: "LOGIN_REQUEST",
    payload,
});

export const logoutRequest = payload => ({
    type: "LOGOUT_REQUEST",
    payload,
});

export const registerRequest = payload => ({
    type: "REGISTER_REQUEST",
    payload,
});

export const getVideoSource = payload => ({
    type: "GET_VIDEO_SOURCE",
    payload,
});

export const getFoundItems = payload => ({
    type: "GET_FOUND_ITEMS",
    payload,
});
