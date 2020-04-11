import React, { useEffect, useState } from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import { setCookie, getCookie } from './Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import s  from   './input.module.css';



class Login2 extends React.Component{
    constructor(){
        super();
      
        this.state={
        result:undefined,
        status: undefined,
        description: undefined,
        name: undefined,
        email:undefined,
        data: undefined,
        redirectToreferer:false, 
        
         }         
    } 
            
    getinfo=async(event)=>{
         
        event.preventDefault()
        const password=event.target.elements.password.value;
        const email=event.target.elements.email.value;
        const lang=event.target.elements.lang.value;
          
        if(email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
             if(password.match( /[0-9]{6,20}[a-z]/g)){
                const api_url=await 
                fetch(`http://api.utigps.com/auth/signin?lang=${lang}&email=${email}&password=${password}&`);
                const dat=await api_url.json();
              
                
                this.setState({description:dat.description,
                                status:dat.status })
                
                        if (this.state.status ==="success"){
                          setCookie("mytoken", dat.token,2)
                            this.setState( {name:dat.data.fullname,
                                            photosm:dat.data.photo.small,
                                            photobig:dat.data.photo.large,
                                            email:dat.data.email,
                                            redirectToreferer:true} )
                         
            } }else { this.setState({description:'password is too short or you forget to add latters'})    }
        } else { this.setState({description:'wrong email'})  }   
    }
       
    componentDidUpdate(){
        if ( this.state.status==="success") { return (window.location.reload(<Redirect to='/' />) ) }
    }
       
    render(){
    
        var nameCookie=getCookie('mytoken');
        if(nameCookie!=undefined)
        if(getCookie('mytoken').length>0){return (<Redirect to={"/"} /> ) }
     
                  
           return (
                    <div className={s.form } style={{margin:"80px auto"}}>

                        <form onSubmit={this.getinfo} >                   
                            <input type='email' name='email' placeholder='email'  />
                            <input type='password' name='password' placeholder='password' />
                        
                                <select className="form-control"   name='lang' placeholder='lang' style={{marginBottom: '5%'}}>
                                    <option value='az'>az</option>
                                    <option value='en'>en</option>
                                    <option value='ru'>ru</option>
                                </select>
                           
                                  
                            <button>Login</button> 

                    
                                   
                            <NavLink className='nav-link' to="/registr">Registration</NavLink>
                            <NavLink className='nav-link' to='/forgetPasword'>if you forget password</NavLink>

                            <div>{this.state.result}</div>
                            <div>{this.state.description}</div>
                        </form>
                    </div>
            ) 
         }
 }          
        
export default Login2;
 


         


    




