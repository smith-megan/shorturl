import React from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {requestApiData} from "../actions"

class Main extends React.Component{

  componentDidMount(){
    this.props.requestApiData();
  }
  person=(x,i)=>
    <div key={x.id.value}>
      <h1>{x.email}</h1>
      <h1>{x.gender}</h1>
      <h1>{x.name.first}</h1>
    </div>

render() {
  const {results=[]}=this.props.data
  return(
  <div>
   <p>hello</p>
    <div>
      {results.map(this.person)}
      </div>
  </div>
)}}

const mapStateToProps = state =>({data: state.data})
const mapDispatchToProps= dispatch => bindActionCreators({requestApiData},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)