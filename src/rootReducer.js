import { combineReducers } from "redux"
import { countReducer } from "./containers/reducer"

export const rootReducer = combineReducers({

    count: countReducer

})

export default rootReducer