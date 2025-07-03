// import { PrimaryButton } from "./components"
import '../style.scss';
import { AppContext } from '../index';
import { useContext } from 'react';
import { PrimaryButton, InputLabel, AnchorLink } from './components';
export const Login = () => {
  const { getUser } = useContext(AppContext);

  const LoginUser = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, ":", password);

    try {
      const loginResponse = await getUser(email, password);
      if (loginResponse) console.log("Login Success");
    } catch (error) {
      console.error(error.message);
      //setErrorMessage(error.message);
    }
  }
  return (
    <>
      <div id="loginContainer" className="container loginContainer">
        <h1 id="h1-login" className="canGlow">WelcomeMessage</h1>
        <div className='login-card' style={{ justifyContent: 'space-evenly' }}>
          <InputLabel id='email' name='email' type='email' text='Email'></InputLabel>
          <InputLabel id='password' name='password' type='password' text='Password'></InputLabel>
          <PrimaryButton style={{ width: '260px' }} onClick={LoginUser} text='Login'></PrimaryButton>

          <AnchorLink href='auth/reset' text='Forgot Password?'></AnchorLink>
        </div>
      </div >
    </>
  )
}
