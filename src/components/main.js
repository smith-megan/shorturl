import React,{useEffect} from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {requestApiData} from "../actions"

class Main extends React.Component{

  // componentDidMount(){
  //   this.props.requestApiData("testingplez");
  // }

render() {
  const results=this.props.data.result || []
  return(
  <div>
   <h1>URL Shortener featuring redux-saga for Ringy</h1>
   <form onSubmit={(e)=>{
     e.preventDefault()
   console.log(e.target.url.value)
    this.props.requestApiData(e.target.url.value);
   console.log(this.props.data.result)
   console.log(this.results)
  }}>
    Url to Shorten:
   <input name="url"></input>
   <input type="submit"></input>
   </form>
    <div>
      {results.original_link}
      {results.short_link}
      </div>
  </div>
)}}

const mapStateToProps = state =>({data: state.data})
const mapDispatchToProps= dispatch => bindActionCreators({requestApiData},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)