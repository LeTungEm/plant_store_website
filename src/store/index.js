import { createStore } from 'vuex'
import {shopContext} from "./modules/shopContext/index";
import { bookContext } from './modules/bookContext';

const store = createStore({
    modules: {
        shopContext:shopContext,
        bookContext: bookContext
    }
})

export default store