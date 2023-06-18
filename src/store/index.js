import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            specialCategoryId: '',
            cartChangeNumber: 0,
            listSearch: [],
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
        }
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
        }
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
        }
    }
})

export default store