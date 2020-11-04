import React from 'react';
import { store, view } from '@risingstack/react-easy-state';

const global = store({
    jwtoken: "",
    isLoggedin: false,

    set changeLoginState(news) {
        global.isLoggedin = news
    },

    set setToken(token) {
        global.jwtoken = token;
    },
    get token() {
        return global.jwtoken;
    }
});

export default global;
