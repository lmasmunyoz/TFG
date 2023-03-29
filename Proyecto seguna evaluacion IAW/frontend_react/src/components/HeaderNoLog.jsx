import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/user/UserContext';
import './Header.css'

const HeaderNoLog = () => {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    // Init context
    setUser({
      id: null,
      name: null,
      surnames: null,
      email: null,
      phone: null,
      token: null,
      rol: null,
      language: "en"
    });
    // Remove local storage data
    localStorage.removeItem("user");
    navigate("/login");
  }


  return (
    <header>
      <div className="logo"><Link to="/Welcome" style={{ textDecoration: 'none' }} >Second Life</Link></div>
      <div className='navbar'>
      </div>
      <div>
        {user.name ?
          <nav className='usuerss'>
            <div className='profile'>
              <Link to={'/crud'} >admin</Link>

              <a href="#" onClick={() => { logout() }}>Logout</a>
              <span><a className='username'>{`${user.name} ${user.surname}`}</a></span>
            </div>
          </nav>
          :
          <nav className='profile'>
            <a><Link to="/registration">Create Account</Link></a>
            <a > <Link to="/login" >Login</Link></a>
          </nav>
        }
      </div>
    </header >
  )
}

export default HeaderNoLog