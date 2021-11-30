import React from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {requestHelloWorld} from "../actions"

class Main extends React.Component{

  componentDidMount(){
    this.props.requestHelloWorld()
  }

render() {
  return(
  <div>
   <p>hello</p>
    <p>{this.props.helloWorld} and hi</p>
  </div>
)}}

const mapStateToProps = state =>({helloWorld: state.helloWorld})
const mapDispatchToProps= dispatch => bindActionCreators({requestHelloWorld},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)