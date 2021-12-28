import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import candyReducer from "./candy/candyReducer";
import donutReducer from "./donut/donutReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    candy: candyReducer,
    donut: donutReducer,
})

export default rootReducer