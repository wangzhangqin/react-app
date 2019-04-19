import {TabAction} from "../../actions/actionCreator"

export const mapStateToProps = (state)=>({
    tabArr : state.getIn(["home","Tab"])
})

export const mapDispatchToProps = (dispatch)=>({
    getHomeData(){
        
    },
    getHomeTab(){
        dispatch(TabAction())
    }
})