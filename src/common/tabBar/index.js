import React,{Component} from "react";
import {Tab} from "./styledcomponent"
import {mapStateToProps,mapDispatchToProps} from "../../mapprops/home";
import {connect} from "react-redux";
import { getHomeTab } from "../../api/home";
import {Link} from "react-router-dom";
class TarBar extends Component{
    render(){
        let tabArr = this.props.tabArr;
        let obj = tabArr.get(0);
        console.log(obj)
        return(
            <Tab>
                <Link to="/home">
                    <img src="https://sr.aihuishou.com/sos/image/6367797561066022001795202485.png?x-oss-process=image/quality,q_80&size=250x98"/>
                </Link>
                <Link to="/cinema">
                    <img src="https://sr.aihuishou.com/sos/image/636840257201237130753554220.png?x-oss-process=image/quality,q_80&size=250x96"/>
                </Link>
                <Link to="/mine">
                   <img src="https://sr.aihuishou.com/sos/image/636779756199000840970861892.png?x-oss-process=image/quality,q_80&size=250x98"/>
                </Link>
            </Tab>
        )
    }
    componentDidMount(){
        this.props.getHomeTab()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TarBar);