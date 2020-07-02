import React from 'react';
import  '../../express.css'
import LangsExpress from '../langs/express_lang'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header=(props)=>{
    return(<>
   
<nav className="navbar navbar-expand-lg navbar-light p-0 mw-100" id='navBg'>
  <a className="navbar-brand " href="#">
	<b>
			<div className='logo'>
      <div className='iconBut'>
				<svg className="bi bi-view-stacked" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  					<path fillRule="evenodd" d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z"/>
			</svg>	
			</div>
			UTI
			<span style={{color:'#d6ff36'}}>GPS</span></div>
		</b>

  </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link " to="/object" > 
          <svg className="bi bi-wifi" width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.858 11.858A1.991 1.991 0 0 1 8 11.5c.425 0 .818.132 1.142.358L8 13l-1.142-1.142z"/>
            <path fillRule="evenodd" d="M7.731 12.024l.269.269.269-.269a1.507 1.507 0 0 0-.538 0zm-1.159-.576A2.49 2.49 0 0 1 8 11c.53 0 1.023.165 1.428.448a.5.5 0 0 1 .068.763l-1.142 1.143a.5.5 0 0 1-.708 0L6.504 12.21a.5.5 0 0 1 .354-.853v.5l-.286-.41zM8 9.5a4.478 4.478 0 0 0-2.7.9.5.5 0 0 1-.6-.8c.919-.69 2.062-1.1 3.3-1.1s2.381.41 3.3 1.1a.5.5 0 0 1-.6.8A4.478 4.478 0 0 0 8 9.5zm0-3c-1.833 0-3.51.657-4.814 1.748a.5.5 0 0 1-.642-.766A8.468 8.468 0 0 1 8 5.5c2.076 0 3.98.745 5.456 1.982a.5.5 0 1 1-.642.766A7.468 7.468 0 0 0 8 6.5z"/>
            <path fillRule="evenodd" d="M8 3.5c-2.657 0-5.082.986-6.932 2.613a.5.5 0 1 1-.66-.75A11.458 11.458 0 0 1 8 2.5c2.91 0 5.567 1.081 7.592 2.862a.5.5 0 1 1-.66.751A10.458 10.458 0 0 0 8 3.5z"/>
          </svg>{props.t.Objects}
           </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/treck">
          <svg className="bi bi-truck" width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5v7h-1v-7a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5v1A1.5 1.5 0 0 1 0 10.5v-7zM4.5 11h6v1h-6v-1z"/>
            <path fillRule="evenodd" d="M11 5h2.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5h-1v-1h1a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4.5h-1V5zm-8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            <path fillRule="evenodd" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
          </svg>{props.t.Tracks}
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/statistic">
        <svg className="bi bi-bar-chart" width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
        </svg>{props.t.Statistics}
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/geo">
          <svg className="bi bi-geo-alt" width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>{props.t.GeoObjects}
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/s">
        <svg className="bi bi-bell" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
          <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
        </svg>{props.t.Notifications}
        </NavLink>
      </li>
    </ul>
    <ul className="navbar-nav  ">
           <div><LangsExpress/></div> 
    <li className="nav-item">
        <NavLink className="nav-link" to="/prof">
        <svg className="bi bi-person-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.854.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
</svg>
	  {props.email}
        </NavLink>
      </li>
    
    </ul>
  </div>
 
</nav>
   </> )
}

let mapProps=(state)=>{
  return{
    email:state.InfoData.email,
    t:state.Lang.translations
  }
}

  export default connect(mapProps)(Header) 