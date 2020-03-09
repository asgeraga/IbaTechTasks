import React, {Component} from 'react';
import './App.css';
import EmailServices from "./compenents/EmailServices";

 

class App extends Component {
  render() {
    return (
      <>

        <EmailServices

          allowedEmailServices={['gmail.com', 'gogi,go', 'yahoo.com', 'icloud.com']} 
          />
        
      </>
    );
  }
}

export default App;


