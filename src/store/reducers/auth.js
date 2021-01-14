import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../../shared/utility'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: null,
    authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.AUTH_START:
            return updatedObject(state, { error: null, loading: true })

        case actionTypes.AUTH_SUCCESS:
            return updatedObject(state, { token: action.idToken, error: null, userId: action.userId, loading: false })

        case actionTypes.AUTH_FAIL:
            return updatedObject(state, { loading: false, error: action.error })

        case actionTypes.AUTH_LOGOUT:
            return updatedObject(state, { error: null, token: null, userId: null })

        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return updatedObject(state, { authRedirectPath: action.path })
        default: return state
    }
}

export default reducer