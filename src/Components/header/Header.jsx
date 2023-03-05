import React from 'react'
import './header.css'
import logo from '../../assest/imgases/Logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="header_block content_center ">
        <figure id="figure">
          <img src={logo} alt="logo" loading="lazy" />
        </figure>
        <div className="header_btn">
          <button className="p1 btn">Users</button>
          <button className="p1 btn">Sing up</button>
        </div>
      </div>
    </header>
  )
}

export default Header
