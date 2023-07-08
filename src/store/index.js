import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            specialCategoryId: '',
            cartChangeNumber: 0,
            listSearch: [],
            loginStatus: true,
            notificationMessage: "",
            notificationStatus: false,
            isNotificationWarning: false,
        };
    },
    getters: {
        getCartChangeNumber(state) {
            return state.cartChangeNumber;
        },
        getListSearch(state) {
            return state.listSearch;
        },
        getSpecialCategoryId(state) {
            return state.specialCategoryId;
        },
        getUserLoginStatus(state) {
            return state.loginStatus;
        },
        getNotificationStatus(state) {
            return state.notificationStatus;
        },
        getNotificationMessage(state) {
            return state.notificationMessage;
        },
        getIsNotificationWarning(state) {
            return state.isNotificationWarning;
        },

    },
    mutations: {
        changeCartChangeNumber(state, cartChangeNumber) {
            state.cartChangeNumber += cartChangeNumber;
        },
        changeListSearch(state, listSearch) {
            state.listSearch = listSearch;
        },
        changeSpecialCategoryId(state, specialCategoryId) {
            state.specialCategoryId = specialCategoryId;
        },
        setUserLoginStatus(state, loginStatus) {
            state.loginStatus = loginStatus;
        },
        showNotification(state, notificationMessage) {
            state.notificationMessage = notificationMessage[0];
            state.isNotificationWarning = notificationMessage[1];
            state.notificationStatus = !state.notificationStatus;
        },
    },
    actions: {
        changeCartChangeNumber({ commit }, cartChangeNumber) {
            commit('changeCartChangeNumber', cartChangeNumber);
        },
        changeListSearch({ commit }, listSearch) {
            commit('changeListSearch', listSearch);
        },
        changeSpecialCategoryId({ commit }, specialCategoryId) {
            commit('changeSpecialCategoryId', specialCategoryId);
        },
        setUserLoginStatus({ commit }, loginStatus) {
            commit('setUserLoginStatus', loginStatus);
        },
        showNotification({ commit }, notificationMessage = []) {
            commit('showNotification', notificationMessage);
        },
    }
})

export default store