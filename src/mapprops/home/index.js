import {TabAction,NewPhoneAction} from "../../actions/actionCreator"

export const mapStateToProps = (state)=>({
    tabArr : state.getIn(["home","Tab"]),
    newArr : state.getIn(["newphone","data"])

})

export const mapDispatchToProps = (dispatch)=>({
    getHomeData(){
        
    },
    getHomeTab(){
        dispatch(TabAction())
    },
    getNewphone(){
        dispatch(NewPhoneAction()); 
    }
})