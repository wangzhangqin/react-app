import {getHomeTab} from "../api/home"
import {HOME_TAB} from "./actionTypes"
import {action} from "./index"
export const TabAction = ()=>{
    return async (dispatch) =>{
        let data = await getHomeTab();
        dispatch(action(HOME_TAB,data.data))
    }
}