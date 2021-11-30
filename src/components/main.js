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
  <div className="main-div">
   <h1 className="main-title">URL Shortener featuring Redux-Saga</h1>
   <div className="main-card">
   <form onSubmit={(e)=>{
     e.preventDefault()
    this.props.requestApiData(e.target.url.value);
  }}>
    Url to Shorten:
   <input name="url"></input>
   <input className="button" type="submit"></input>
   </form>
    <div className="results">
      <p><a href={results.original_link}>{results.original_link}</a></p>
      <p><a href={"https://www."+results.short_link}>{results.short_link}</a></p>
      </div>
    </div>
  </div>
)}}

const mapStateToProps = state =>({data: state.data})
const mapDispatchToProps= dispatch => bindActionCreators({requestApiData},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)