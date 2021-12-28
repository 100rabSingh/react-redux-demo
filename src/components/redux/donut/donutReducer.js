import { BUY_DONUT } from "./donutType";

const initialState = {
    numOfDonuts: 30,
}

const donutReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_DONUT:
            return {
                ...state,
                numOfDonuts: state.numOfDonuts - 1
            }

        default:
            return state
    }
}

export default donutReducer