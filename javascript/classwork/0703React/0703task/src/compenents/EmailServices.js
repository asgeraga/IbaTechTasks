import React, {useState} from 'react';
import Autho from "./Autho";
import Message from "./Message" ;

const EmailService = props => {
  const submitBtn = React.createRef();
  const [state, setState] = useState({isValidationPassed: false});
  const validateEmail = (e) => {
      let AllowedEmail=props.allowedEmailServices;
      console.log(AllowedEmail)
      for(let email of AllowedEmail){
          if(e.target.value.split("@")[1]===email){
              console.log("Yupp")
          }
      }
  };
  
  const validatePassword = (e) => {
    const answer = e.target.value.length >= 8;

    setState(prevState => {
      return {
        ...prevState,
        isCorrectPassword: answer
      }
    })
  };


  const submitFormHandler = () => {};
  const successMessage = <Message text={'Hello! You entered the empty email client.'} />;

  return (
    <form onSubmit={submitFormHandler}>
      <Autho type={'email'} validation={validateEmail}/>
      <Autho type={'password'} validation={validatePassword}/>
      <input disabled={!(state.isCorrectEmail && state.isCorrectPassword)}
             type="submit"
             value={'Log in'}/>

    </form>
  );
};

export default EmailService;
