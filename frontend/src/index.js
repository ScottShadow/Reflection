import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/signup';
import './style.scss';
import { Components } from './pages/components';
import { MemoryVault } from './pages/memory';
import Home from './pages/home';
const root = ReactDOM.createRoot(document.getElementById('root'))

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <label htmlFor='counter'>Click Me </label>
      <button id='counter' className='primary' onClick={() => setCount(count + 1)}>{count}</button>
    </>)

}
function Links() {

  return (
    <>
      <div style={{ display: 'flex', gap: "10px" }}>
        <Link to='/'>HomePage</Link>
        <Link to='/components'>Components</Link>
        <Link to='/auth/login'>Login</Link>
        <Link to='/counter'>Counter</Link>
      </div>
    </>
  )

}
export const AppContext = React.createContext();
export default function MyProvider({ children }) {
  const [user, setUser] = useState(null);
  const url = "http://localhost:3001";

  const getUser = async (email, password) => {
    const data = { email, password };
    try {
      const response = await fetch(url + "/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message);
        // throw new Error(errorData.message || "Network response was not ok");
      }
      const responseData = await response.json();

      console.log(responseData);
      setUser({ ...responseData });
      return responseData;
    } catch (error) {
      console.error('Error during Login: ', error);
      // throw error;
    };
  }

  const createUser = async (username, email, password) => {
    const data = { username, email, password };
    try {
      const response = await fetch(url + "/auth/register", {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message);
      }
      const responseData = await response.json();
      console.log(responseData);
      setUser({ ...responseData });
      return responseData;
    } catch (error) {
      console.error("Error Creating User: ", error.message);
    }
  }
  const shared = { user, setUser, getUser, createUser };
  return (
    <AppContext.Provider value={shared}>
      {children}
    </AppContext.Provider>
  )

}
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/links' element={<Links />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/register' element={<Register />}></Route>
        <Route path='/components' element={<Components />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/memory' element={<MemoryVault />}></Route>
      </Routes>
    </BrowserRouter>

  );
};

root.render(
  <MyProvider>
    <App />
  </MyProvider>
);
