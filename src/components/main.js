import React,{useEffect} from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {requestApiData} from "../actions"

class Main extends React.Component{

  componentDidMount(){
    this.props.requestApiData();
  }

render() {
  const results=this.props.data.result || []
  return(
  <div>
   <p>hello</p>
   <form onSubmit={(e)=>{e.preventDefault()
   console.log(this.props.data.result)
   console.log(this.results)
  }
     //throw in state?
   }>
    Url to Shorten:
   <input></input>
   <input type="submit"></input>
   </form>
    <div>
      {/* <p>{this.props.data.result.code}</p> */}
      {results.short_link
      // .foreach((index, i)=>{return (
      //   <div key={i}>
      //     <h1>Your original url:</h1>
      //     <p>{index.result.original_link}</p>
      //     <h1>Your shortened url:</h1>
      //     <p>{index.result.short_link}</p>
    
        // </div>)
      // })
      }
      </div>
  </div>
)}}

const mapStateToProps = state =>({data: state.data})
const mapDispatchToProps= dispatch => bindActionCreators({requestApiData},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)