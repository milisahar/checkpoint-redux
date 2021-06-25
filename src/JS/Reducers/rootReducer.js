import { combineReducers } from "redux";
import { Todoreducer } from "./Todoreducer"

const rootReducer = combineReducers({

    Todoreducer: Todoreducer,

})

export default rootReducer;