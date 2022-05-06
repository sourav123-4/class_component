import React, { Component } from 'react';
export class Anyname extends Component {
  constructor(){
    super();
    this.state={data:"sourav",number:0};
  }
  updateData(){
    this.setState({data:"biplab"});
  }
  increaseNumber = ()=>{
    this.setState({number:this.state.number+1})
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        {/* using bind */}
        <button onClick={this.updateData.bind(this)}>Click</button>
        <h2>{this.state.number}</h2>
        {/* using arrow function  */}
        <button onClick={this.increaseNumber}>Increase</button>
      </div>
    )
  }
}

export class Child extends Component{
  constructor(props){
    super(props)
    this.state={data:this.props.name}
  }
  render(){
    return(
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}
