import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    // Vuex will automatiically pass the state to this getter
    // here we use the constant name to ensure that we don't use the same namespace twice
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    // the context of an action function will be passed by vuex automatically
    [types.COUNTER_INCREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_INCREMENT_COUNTER, payload);
    },
    // you can destructure the context object by doing the following, if you don't need the entire object for some reason
    [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_DECREMENT_COUNTER, payload);
    },
    [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
        }, payload.duration);
    },
    [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
        }, payload.duration);
    }
};

// once again since this is es6 code we don't need to define the key value pairs it will be done automatically: "state: state" etc.
export default {
    state,
    mutations,
    actions,
    getters
}