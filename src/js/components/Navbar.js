import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



export default class Navbar extends Component{

  constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
  }

  toggleClass(state,val) {
    if(val==null){
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    }else{
      this.setState({ active: val });
    }

  }

  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white-nav" id="navbar">
      <div className="xyz"></div>
        <div className={this.state.active ? 'container magic': 'container'} >
          <NavLink className="navbar-brand" to="/">
            <svg width="120px" height="76px">
              <g featurekey="text1" fill="#0b65b1" transform="matrix(2.5,0,0,2.5,0,5)">
              <path d="M1.7 16.2 q-0.28 0 -0.63 0.03 t-0.67 0.03 t-0.57 -0.05 t-0.31 -0.21 q-0.12 -0.1 0 -0.23 t0.22 -0.23 q0.38 -0.04 0.66 -0.06 t0.52 -0.05 t0.46 -0.06 t0.46 -0.07 q0.3 -1.12 0.56 -2.14 t0.5 -2.02 t0.47 -2.02 t0.49 -2.14 q0.18 -0.26 0.3 -0.27 t0.4 0.01 q0.12 0.64 0.18 1.08 t0.11 0.89 t0.12 1 t0.19 1.39 q0.08 0.86 0.22 1.69 t0.24 1.71 q0.52 -0.08 1 -0.17 t0.85 -0.16 t0.6 -0.11 t0.23 -0.02 q0.06 0.18 -0.19 0.35 t-0.65 0.34 t-0.86 0.32 t-0.82 0.27 q0.04 0.38 0.14 0.95 t0.21 1.21 t0.23 1.29 t0.21 1.18 t0.13 0.88 t0 0.39 q-0.34 0.04 -0.49 -0.07 t-0.37 -0.19 q-0.16 -1.32 -0.4 -2.69 t-0.38 -2.73 q-0.46 0.1 -1.17 0.27 t-1.47 0.29 q-0.12 0.44 -0.22 0.98 t-0.2 1.03 t-0.17 0.88 t-0.13 0.51 q-0.1 0.1 -0.35 0.13 t-0.41 -0.13 q0 -0.12 0.09 -0.55 t0.21 -0.95 t0.25 -1.01 t0.21 -0.77 z M2.66 15.219999999999999 q0.3 -0.06 0.66 -0.13 t0.67 -0.15 t0.54 -0.13 t0.27 -0.07 q-0.04 -0.44 -0.07 -0.73 t-0.06 -0.61 t-0.07 -0.75 t-0.12 -1.17 q-0.16 -1.26 -0.23 -1.88 t-0.13 -0.4 q-0.28 1.08 -0.49 1.87 t-0.38 1.46 t-0.31 1.31 t-0.28 1.38 z M13.66 7.779999999999999 q0.18 0.4 0.23 0.52 t0.09 0.4 q-0.24 -0.2 -0.42 -0.34 t-0.36 -0.25 t-0.4 -0.19 t-0.52 -0.14 q-0.8 -0.1 -1.51 0.06 t-1.2 0.51 t-0.69 0.86 t0 1.11 q0.22 0.66 0.68 1.27 t1.05 1.19 t1.26 1.09 t1.28 0.96 t1.13 0.81 t0.8 0.62 q0.62 -0.32 1.16 -0.54 t1.12 -0.44 l0.12 0 q0.08 0.02 0.02 0.12 q-0.18 0.16 -0.43 0.34 t-0.51 0.37 t-0.51 0.37 t-0.45 0.32 q0.58 0.58 0.76 1.05 t0.02 0.92 t-0.66 0.92 t-1.3 1.01 q-0.52 0.36 -1.12 0.62 t-1.11 0.31 t-0.82 -0.19 t-0.21 -0.9 q0.32 -1.08 1.18 -2 t1.98 -1.86 q0 -0.06 -0.39 -0.34 t-1 -0.72 t-1.34 -1.02 t-1.4 -1.22 t-1.19 -1.34 t-0.7 -1.38 q-0.24 -0.86 -0.11 -1.5 t0.42 -1.07 t0.64 -0.67 t0.57 -0.32 q0.46 -0.14 0.93 -0.24 t0.95 -0.06 t0.97 0.27 t0.99 0.71 z M12.02 20.44 q-0.04 0.14 0.1 0.23 t0.46 0.07 t0.81 -0.19 t1.17 -0.57 q0.5 -0.34 0.77 -0.74 t0.32 -0.79 t-0.13 -0.72 t-0.6 -0.53 q-0.2 0.1 -0.67 0.47 t-0.96 0.85 t-0.87 1 t-0.4 0.92 z M25.38 6.84 q-0.68 -0.02 -1.4 0.03 t-1.42 0.13 t-1.36 0.18 t-1.2 0.18 q0.06 1.52 0.12 3.02 t0.15 3.03 t0.22 3.11 t0.33 3.28 q0 0.08 -0.14 0.14 t-0.3 0.06 t-0.31 -0.05 t-0.19 -0.21 q-0.08 -0.96 -0.14 -2.16 t-0.12 -2.45 t-0.13 -2.48 t-0.15 -2.27 t-0.17 -1.8 t-0.19 -1.08 q-1.16 0 -2.45 0.14 t-2.49 0.28 q-0.2 0.04 -0.34 -0.02 t-0.17 -0.16 t0.09 -0.22 t0.46 -0.24 q1.44 -0.26 2.78 -0.43 t2.64 -0.3 t2.62 -0.26 t2.72 -0.33 q0.1 0 0.23 0.11 t0.22 0.26 t0.13 0.3 t-0.04 0.21 z M24.040000000000003 20 q-0.14 0.14 -0.24 0.16 t-0.2 -0.03 t-0.21 -0.14 t-0.23 -0.15 q-0.02 -0.28 -0.08 -1.25 t-0.12 -2.31 t-0.13 -2.87 t-0.12 -2.95 t-0.09 -2.57 t-0.02 -1.69 q-0.04 0.02 0.03 -0.02 t0.19 -0.1 t0.28 -0.13 t0.32 -0.11 q-0.02 0.92 -0.03 2.5 t0.04 3.51 t0.19 4.05 t0.42 4.1 z M33.82 6.84 q-0.68 -0.02 -1.4 0.03 t-1.42 0.13 t-1.36 0.18 t-1.2 0.18 q0.06 1.52 0.12 3.02 t0.15 3.03 t0.22 3.11 t0.33 3.28 q0 0.08 -0.14 0.14 t-0.3 0.06 t-0.31 -0.05 t-0.19 -0.21 q-0.08 -0.96 -0.14 -2.16 t-0.12 -2.45 t-0.13 -2.48 t-0.15 -2.27 t-0.17 -1.8 t-0.19 -1.08 q-1.16 0 -2.45 0.14 t-2.49 0.28 q-0.2 0.04 -0.34 -0.02 t-0.17 -0.16 t0.09 -0.22 t0.46 -0.24 q1.44 -0.26 2.78 -0.43 t2.64 -0.3 t2.62 -0.26 t2.72 -0.33 q0.1 0 0.23 0.11 t0.22 0.26 t0.13 0.3 t-0.04 0.21 z M34.540000000000006 20.1 q-0.32 0.1 -0.4 0.08 t-0.22 -0.3 q-0.42 -1.12 -0.98 -2.59 t-1.12 -2.96 t-1.07 -2.86 t-0.83 -2.31 q0 -0.12 0.13 -0.15 t0.29 -0.02 t0.29 0.06 t0.13 0.11 q0.46 1.38 0.83 2.47 t0.75 2.14 t0.84 2.17 t1.1 2.56 q0.62 -2.36 1.05 -4.6 t0.68 -4.02 t0.37 -2.91 t0.16 -1.29 q0 -0.1 0.12 -0.14 t0.26 -0.04 t0.25 0.05 t0.11 0.13 q-0.06 0.44 -0.23 1.62 t-0.41 2.72 t-0.53 3.23 t-0.57 3.15 t-0.55 2.48 t-0.45 1.22 z M38.32000000000001 16.2 q-0.28 0 -0.63 0.03 t-0.67 0.03 t-0.57 -0.05 t-0.31 -0.21 q-0.12 -0.1 0 -0.23 t0.22 -0.23 q0.38 -0.04 0.66 -0.06 t0.52 -0.05 t0.46 -0.06 t0.46 -0.07 q0.3 -1.12 0.56 -2.14 t0.5 -2.02 t0.47 -2.02 t0.49 -2.14 q0.18 -0.26 0.3 -0.27 t0.4 0.01 q0.12 0.64 0.18 1.08 t0.11 0.89 t0.12 1 t0.19 1.39 q0.08 0.86 0.22 1.69 t0.24 1.71 q0.52 -0.08 1 -0.17 t0.85 -0.16 t0.6 -0.11 t0.23 -0.02 q0.06 0.18 -0.19 0.35 t-0.65 0.34 t-0.86 0.32 t-0.82 0.27 q0.04 0.38 0.14 0.95 t0.21 1.21 t0.23 1.29 t0.21 1.18 t0.13 0.88 t0 0.39 q-0.34 0.04 -0.49 -0.07 t-0.37 -0.19 q-0.16 -1.32 -0.4 -2.69 t-0.38 -2.73 q-0.46 0.1 -1.17 0.27 t-1.47 0.29 q-0.12 0.44 -0.22 0.98 t-0.2 1.03 t-0.17 0.88 t-0.13 0.51 q-0.1 0.1 -0.35 0.13 t-0.41 -0.13 q0 -0.12 0.09 -0.55 t0.21 -0.95 t0.25 -1.01 t0.21 -0.77 z M39.28 15.219999999999999 q0.3 -0.06 0.66 -0.13 t0.67 -0.15 t0.54 -0.13 t0.27 -0.07 q-0.04 -0.44 -0.07 -0.73 t-0.06 -0.61 t-0.07 -0.75 t-0.12 -1.17 q-0.16 -1.26 -0.23 -1.88 t-0.13 -0.4 q-0.28 1.08 -0.49 1.87 t-0.38 1.46 t-0.31 1.31 t-0.28 1.38 z"></path></g>
            </svg>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleClass.bind(this)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*}<input type="checkbox" id="navbar-toggle-cbox"></input>
          <label for="navbar-toggle-cbox" className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
           &#9776;
          </label>*/}
          <div className="collapse navbar-collapse justify-content-end" id="navbar-header">
            <ul className="navbar-nav ">
              <li className="nav-item">
              <NavLink exact className="nav-link" to='/' activeClassName="active" onClick={()=>{this.toggleClass(this,false)}}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active" onClick={()=>{this.toggleClass(this,false)}}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/our-work" activeClassName="active" onClick={()=>{this.toggleClass(this,false)}}>Our Work</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact" activeClassName="active" onClick={()=>{this.toggleClass(this,false)}}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
