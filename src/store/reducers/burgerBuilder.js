import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: null,
    totalPrice: 10,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 25,
    cheese: 15,
    meat: 30
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

            }


        case (actionTypes.REMOVE_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }

        case (actionTypes.SET_INGREDIENTS):
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                totalPrice: 10
            }


        case (actionTypes.FETCH_INGREDIENT_FAILED):
            return {
                ...state,
                error: true
            }

        default: return state;
    }

}
export default reducer;