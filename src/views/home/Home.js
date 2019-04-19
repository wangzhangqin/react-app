import React, { Component } from 'react'
import {Header} from "./styledComponents";
import {mapStateToProps,mapDispatchToProps} from "../../mapprops/home";
import {connect} from "react-redux";
import {Icon} from "antd-mobile"
class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <a className="city">北京市</a>
          <a className="search">
          <Icon type="search" size="xxs"/>
          </a>
          
        </Header>
      </div>
    )
  }
  componentDidMount(){
    this.props.getHomeData()
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)