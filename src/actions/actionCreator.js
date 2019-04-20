import {getHomeTab,getNewphone} from "../api/home"
import {HOME_TAB,NEW_PHONE} from "./actionTypes"
import {action} from "./index"

export const TabAction = ()=>{
    return async (dispatch) =>{
        let data = await getHomeTab();
        dispatch(action(HOME_TAB,data.data))
    }
}

export const NewPhoneAction = ()=>{
    return async (dispatch) =>{
        let data = await getNewphone();
        dispatch(action(NEW_PHONE,data.data))
    }
}
