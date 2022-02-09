import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Navbar(props) {
  return (
    <div>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
       </ul>
      
    </div>
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
      <label className={`custom-control-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="customSwitch1">Enable Dark Mode</label>
      </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'TextUtils'
}

export default Navbar
