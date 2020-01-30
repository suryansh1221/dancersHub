import { combineReducers } from "redux";

const openModal = (state={}, action) => {
    if(action.type === 'OPEN_MODAL'){
        return action.payload
    }
    return false
};

export default combineReducers({
    openState: openModal
})