import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            specialCategoryId: '',
            cartChangeNumber: 0,
            listSearch: [],
            loginStatus: true,
            detailData: '',
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
        getDetailData(state) {
            return state.detailData;
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
        setDetailData(state, detailData) {
            state.detailData = detailData;
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
        setDetailData({ commit }, detailData) {
            commit('setDetailData', detailData);
        },
    }
})

export default store