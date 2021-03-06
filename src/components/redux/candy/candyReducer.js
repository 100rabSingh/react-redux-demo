import { BUY_CANDY } from "./candyType";

const initialState = {
    numOfCandies: 100,
}

const candyReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CANDY:
            return {
                ...state,
                numOfCandies: state.numOfCandies - 1
            }

        default:
            return state
    }
}

export default candyReducer