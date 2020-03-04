import React, { Component } from 'react';
import './App.css';



class App extends Component{
  state={
    smthYouHate:"Corona",
    msgText:"corona"
  };
  deleteVirusHandler =()=>{
    this.setState({msgText:"yeah"});
    
  };
  changeInputValueHandler = (event) => {
    this.setState({
      smthYouHate:event.target.value
    });
  };

  render(){
      return (
        <>
        <input type="text" onChange={this.changeInputValueHandler} value={this.state.smthYouHate}/>

      <h1 className="title">{this.state.msgText} {this.state.smthYouHate}</h1>
        
      <button onClick={this.deleteVirusHandler}>Delete </button>
       </>
      );   
  }
}
export default App;
