import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    console.log("Load constructor");
    this.state={count:0,}
  }

  componentWillMount(){
    console.log("Load componentWillMount");

  }
  componentDidMount(){
    console.log("Load componentDidMount");

  }
  shouldComponentUpdate(){
    console.log("Load shouldComponentUpdate");
    return true
  }
  render() {
    console.log("Load render");

    return (
      <>
      <h1>Number is : {this.state.count}</h1>
      <button type="button" onClick={()=>this.setState({count:this.state.count +1})}>count{this.state.count}</button>

      <button type="button" onClick={()=>this.setState({count:0})}>setZero</button>
      <ChildComponent name="Raming"/>
      </>
    )
  }
}

class ChildComponent extends Component {
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <>
      <h3>This is prop :{this.props.name} </h3>
      </>
    )
  }
}
export default App;
