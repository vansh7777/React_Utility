import React from 'react'

export default function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color: props.mode==='light'?'black':'white'}}>TextUtility</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color: props.mode==='light'?'black':'white'}}>Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" href="/" style={{color: props.mode==='light'?'black':'white'}}>About</a>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"></input>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
