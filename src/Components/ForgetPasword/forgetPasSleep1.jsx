import React, { useEffect, useState } from 'react';

import { ForfetPasswordSleep2 } from './forgetPasSleep2';
import { getCookie } from '../Login_Regisr/Registration';
import { Redirect, NavLink } from 'react-router-dom';
import s from '../Login_Regisr/input.module.css';
import { Primer } from '../primer/primer';


const FF =()=>{
    return(<div>
        <input type='email' name='email' placeholder='email'  />
        <input type='email' name='email' placeholder='email'  />
        <input type='email' name='email' placeholder='email'  />
   </div> )
}

 
 class ForfetPasswordSleep1 extends React.Component{
    constructor(){
        super();
      
        this.state={
      
         name: undefined,
         email:undefined,
         status:undefined,
         description:undefined,
         load: undefined
         }
             
    } 
     
        
        getinfo=async(event)=>{
            
            event.preventDefault()
            this.setState({  load: 'please wait...'})
  
            const email=event.target.elements.email.value;
            const lang=event.target.elements.lang.value;

            if(email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
                const api_url=await 
                fetch(`http://api.utigps.com/auth/recoverstep1?lang=${lang}&email=${email}&`);
                const dat=await api_url.json();

                this.setState({description:dat.description,
                        status:dat.status,
                        email:email })   }  
            else{this.setState({load:'wrong email'})}
        }
       
      
        LoadingElemrnt=()=>{
           {
            if (this.state.load== 'please wait...'){
                 if (this.state.description!=='Email doesnt exists'){return(<Primer/>)}
                
            }}
     
        }
       
 
 

    
    render(){
        var nameCookie=getCookie('mytoken');
        if(nameCookie!=undefined)
        if(getCookie('mytoken').length>0){
            return (<Redirect to={"/"} />
            )
        }



        if ( this.state.description==="Verification code was sent to your email") {
            return(
              <ForfetPasswordSleep2 codeMessage={this.state.description} email={this.state.email} />
            )
        }
               
           return (
                <div>
                    <div className={s.form } style={{margin:"80px auto"}}>
                        <form onSubmit={this.getinfo} >   
                       
                                  <p>Please write your email</p>        
                            <input type='email' name='email' placeholder='email'  />

                               <select class="form-control"   name='lang' placeholder='lang' style={{marginBottom: '5%'}}>
                                    <option value='az'>az</option>
                                    <option value='en'>en</option>
                                    <option value='ru'>ru</option>
                                </select> 
                           
                            <button >Login</button>         
                          
                            <div>{this.state.description}</div>
                            <div>{this.state.load}</div>
                           
                            <NavLink className='nav-link' to='/login'>cam back to logim</NavLink>
                        </form>
                        <div>{this.LoadingElemrnt()}</div> 
                    </div>                  
                </div>     
            ) 
         }
     
 }

    


export default ForfetPasswordSleep1;
