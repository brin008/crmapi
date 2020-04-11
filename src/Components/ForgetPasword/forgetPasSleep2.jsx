import React, { useEffect, useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { setCookie } from '../Login_Regisr/Registration';
import s from '../Login_Regisr/input.module.css';
import { Primer } from '../primer/primer';


export class ForfetPasswordSleep2 extends React.Component{
    constructor(){
        super();
      
        this.state={
      
         name: undefined,
         email:undefined,
         status:undefined,
         description:undefined
   
         }
             
    } 
     
        
        getinfo=async(event)=>{ 
            
        event.preventDefault()
        const repassword=event.target.elements.repassword.value;
        const password=event.target.elements.password.value;
        const code=event.target.elements.code.value;
        const email=event.target.elements.email.value;
        const lang=event.target.elements.lang.value;
        const api_url=await 
        fetch(`http://api.utigps.com/auth/recoverstep2?lang=${lang}&email=${email}&code=${code}&password=${password}&repassword=${repassword}&`);
        const dat=await api_url.json();
        setCookie("mytoken", dat.token,2)   
               
       
      
        this.setState({description:dat.description,
         status:dat.status })
    

                     
                      
       }
       
      
    
       
 
 

    
    render(){

        
        if( this.state.status=== "success"){
            return(<Redirect to='/' />) 
        }
     

        
           return (
                <div>
                    <div className={s.form } style={{margin:"80px auto"}}>
                        <form onSubmit={this.getinfo} >          
                            <p>{this.props.codeMessage}</p>   
                              <select class="form-control"   name='lang' placeholder='lang' style={{marginBottom: '5%'}}>
                                    <option value='az'>az</option>
                                    <option value='en'>en</option>
                                    <option value='ru'>ru</option>
                                </select>
                        
                             <input type='email' name='email' placeholder='email' value={this.props.email} />
                        
                          
                            <input type='text' name='code' placeholder='code'/>
                            <input type='password' name='password' placeholder='password'/>
                            <input type='repassword' name='repassword' placeholder='repassword'/>
                            <button >Login</button>         
                            <div>{this.state.result}</div>
                            <div>{this.state.description}</div>
                            <NavLink className='nav-link' to='/login'>cam back to logim</NavLink>
                        </form>                    
                    </div>                   
                </div>
                
        
            ) 
         }


         
 }
    
