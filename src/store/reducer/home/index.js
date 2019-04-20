import immutable from "immutable";
import {HOME_TAB,NEW_PHONE} from "../../../actions/actionTypes"
const defaultState = immutable.fromJS({
    Tab : [],
    newArr:[]
})
export default (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case HOME_TAB:
        // console.log(state.updateIn(["Tab"],x=>x.concat(action.value)),11111)
            return state.updateIn(["Tab"],x=>x.concat(action.value));
        case NEW_PHONE:
        console.log(state.updateIn(["newArr"],x=>x.concat(action.value)),11111)
            return state.updateIn(["newArr"],x=>x.concat(action.value));
    }
    return state;
}