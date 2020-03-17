import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {Link, Route} from 'react-router-dom'




const Home = () =>{return <div>Home</div>};
const Login = () =>{return <div>Login</div>};
const Register = () =>{return <div>Register</div>};

class App extends Component {
  
  render() {
    return (
      <>
        <h2>React route is a separate library!</h2>
        <p>We need to download it every time for every project</p>
        <p>download command - npm install react-router react-router-dom --save</p>
        <Link to={'/user'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>

        <Route path={"/home"} component={Home}/>
        <Route path={"/login"} component={Login}/>
        <Route path={"/register"} component={Register}/>


      </>
    );
  }
}

export default App;

