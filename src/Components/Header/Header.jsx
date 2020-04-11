import React from 'react';
import style from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, NavLink, Route, BrowserRouter } from 'react-router-dom';
import { setCookie } from '../Login_Regisr/Registration';






	

const ButLogOut=(props)=>{
	return(<button onClick={props.funcLogout}>
		logout
	</button>
		
	)
}


export  function deleteCookie(cookieName) {
	
    setCookie(cookieName, "", {
	  'max-age': -1
	 
    })
 }

class Header extends React.Component{
	 constructor(){
		 super()
		 this.state={ closed:true }		
	}
		

	LogOut=()=>{
		deleteCookie('mytoken')
		this.setState({closed:false})}

	render(){ 
		   if(this.state.closed==false){
			   return(window.location.reload(<Redirect to='/login' />)
			   
			   )
		   }
	
		return(
				
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a href='/' className="navbar-brand">
					<img src="https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png" width='60px'
					 className="d-inline-block align-top"/>
			</a> 
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   				<span className="navbar-toggler-icon">
				</span>
  			</button>

  			<div className="collapse navbar-collapse" id="navbarSupportedContent">
    			<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink class="nav-link"  to='/update'>Update</NavLink>
      				</li>
	  				<li className="nav-item">
						<NavLink class="nav-link"  to='/'>Home</NavLink>
      				</li>
	  				<li className="nav-item">
        				<a className="nav-link" href="#">Link</a>
     				</li>
      				<li className="nav-item">
        				<a className="nav-link" href="#">Link</a>
      				</li>
					  <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/updatePas"> Password</NavLink>
          <NavLink className="dropdown-item" to="/updateEm">Change Email</NavLink>
		  <NavLink className="dropdown-item" to="/update">Account / Update</NavLink>
          
        </div>
      </li>
    			</ul>
				<button type="button" className="btn btn-outline-success my-3 my-sm-0" data-toggle="modal" data-target="#exampleModalCenter">Logout</button>
      	

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h4> Are you sure ?</h4>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" className="btn btn-primary"  onClick={this.LogOut}>Yes</button>
      </div>
    </div>
  </div>
</div>

  			</div>
		</nav>

		)
	          
	 }
}


export default Header


