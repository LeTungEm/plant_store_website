import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
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
        }
    },
    mutations: {
        changeCartChangeNumber(state, cartChangeNumber) {
            state.cartChangeNumber += cartChangeNumber;
        },
        changeListSearch(state, listSearch){
            state.listSearch = listSearch;
        }
    },
    actions: {
        changeCartChangeNumber({ commit }, cartChangeNumber) {
            commit('changeCartChangeNumber', cartChangeNumber);
        },
        changeListSearch({ commit }, listSearch) {
            commit('changeListSearch', listSearch);
        }
    }
})

export default store