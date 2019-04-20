import React, { Component } from 'react'
import { HeaderNewPhone, Container, ContainerNew, Container_1, Container_2, Container_3 } from "./styledComponents";
import { mapStateToProps, mapDispatchToProps } from "../../mapprops/home";
import { connect } from "react-redux";
// import {Icon} from "antd-mobile"


class Newphone extends Component {
  render() {
    return (
      <div>
        <HeaderNewPhone>
          <h2 className="title">爱回收 0元换新机</h2>
        </HeaderNewPhone>
        <Container>
          <ContainerNew>
            <Container_1 className="single-image"><img src="https://sr.aihuishou.com/sos/image/636912700934255620665234914.png?x-oss-process=image/quality,q_80&size=750x180" /></Container_1>
            <Container_2 className="single-image"><img src="https://sr.aihuishou.com/sos/image/6368809434967366801948518508.png?x-oss-process=image/quality,q_80&size=750x76" /></Container_2>
            <Container_3><img src="https://sr.aihuishou.com/sos/image/636911774025404460900496638.jpg?x-oss-process=image/quality,q_80&size=726x450" /></Container_3>
          </ContainerNew>
        </Container>
      </div>
    )
  }
  componentDidMount() {
    this.props.getNewphone()
    console.log(this.props)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newphone)