import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../shared/utility'

const initialState = {
    ingredients: null,
    totalPrice: 10,
    error: false,
    building: false
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
            const updatedIngredient = updatedObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 })
            const updatedState = {
                ingredients: updatedIngredient,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updatedObject(state, updatedState)

        case (actionTypes.REMOVE_INGREDIENT):
            const updatedIngs = updatedObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 })
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updatedObject(state, updatedSt)

        case (actionTypes.SET_INGREDIENTS):
            return updatedObject(state, {
                ingredients: action.ingredients,
                error: false,
                totalPrice: 10,
                // building: false
            })

        case (actionTypes.FETCH_INGREDIENT_FAILED):
            return updatedObject(state, {
                error: true
            })
        default: return state;
    }

}
export default reducer;