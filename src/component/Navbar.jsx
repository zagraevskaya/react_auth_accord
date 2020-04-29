import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <Link className="navbar-brand" to="/">Home</Link>
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link className="nav-link" to="/list-role">Ролі</Link>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Довідники
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/list-department">Відділення</a>
              <a className="dropdown-item" href="/list-department">Департаменти</a>
            </div>  
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Користувачі
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/list-user">Користувачі мобільного</a>
              <a className="dropdown-item" href="/list-user">Користувачі декрет</a>
            </div>  
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
