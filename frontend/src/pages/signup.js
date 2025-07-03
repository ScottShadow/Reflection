import { useContext } from 'react';
import '../style.scss';
import { AnchorLink, InputLabel, PrimaryButton } from './components';
import { AppContext } from '..';

export const Register = () => {
  const { createUser } = useContext(AppContext);

  const RegisterUser = async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`${username},${email},${password}`)
    try {
      const registerResponse = await createUser(username, email, password);
      if (registerResponse) console.log("Register Successful, user Created");
    }
    catch (error) {
      console.error(error.message);
    }

  }

  return (
    <>
      <div id="loginContainer" className="container loginContainer">
        <h1 id="h1-login" className="canGlow">WelcomeMessage</h1>
        <div className='login-card' style={{ minHeight: '370px', justifyContent: 'space-evenly' }}>
          <InputLabel id='username' type='username' name='username' text='Username'></InputLabel>
          <InputLabel id='email' name='email' type='email' text='Email'></InputLabel>
          <InputLabel id='password' name='password' type='password' text='Password'></InputLabel>
          <PrimaryButton style={{ width: '260px' }} onClick={RegisterUser} text='Register'></PrimaryButton>

          <AnchorLink href='/auth/login' text='Already Have an account? Login'></AnchorLink>
        </div>
      </div>
    </>
  )
}
