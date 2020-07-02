import React from 'react';
import { connect } from 'react-redux';
import { postCreateAccountThunkCreator} from './loginReducer';
import Langs from '../langs/Langs';
import {  NavLink} from 'react-router-dom';
import style from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from '../../photo/log.png'
import apple from '../../photo/apple.png'
import google from '../../photo/google.png'
import { ToProfRedirect } from '../../toProfRedireckt';

const Registr_ss=(props)=>{

    const OnchangeEmPW=(e)=>{debugger
     e.preventDefault()
     let lang=props.lang
     let fullname=e.currentTarget.fullname.value
     let email=e.currentTarget.email.value
     let password=e.currentTarget.password.value
     let country=e.currentTarget.country.value
     props.postCreateAccountThunkCreator(lang,fullname, password,email,country)
   }

    return(
        <>
        <div>
            <div >
                
                {props.textErr}
            </div>
            <div className={style.headerLog}>
                <a href='/'><img src={log}/></a><br/>
                {props.l.MainDescription}</div>
        </div>
        <div>
           
      
           <form onSubmit={OnchangeEmPW}>
                <div className={style.form}>  <Langs/>
                    <div style={{textAlign:'left'}} >{props.l.Fullname}</div>
                         <input type='text' name='fullname' />
                   
                    <div  style={{textAlign:'left'}} >{props.l.Email}</div>
                        <input type='email' name='email' />
                  

                    <div style={{textAlign:'left'}}>{props.l.Password} </div>
                        <input type='password'name='password' />
                    <div style={{textAlign:'left'}}>{props.l.Country}</div>
                     <select  name='country' placeholder='country' >
                     <option value='--'>--</option>    
                     <option value='1'>EN</option>
                     <option value='2'> AZ</option>
                     <option value='3'>RU</option>
                     </ select>
                    <button >{props.l.SignUp}</button> 
                    <div className={style.Sing}>
                        
                        <NavLink to='/log'
                        style={{textDecoration:'none'}}>{props.l.SignIn}</NavLink>
                        <NavLink to='/lostpas'
                        style={{textDecoration:'none'}}>{props.l.LostPassword}</NavLink>
                    </div>
                </div>
            </form> 
        </div>
      
        <div className={style.foot}>
            
            <NavLink to='/about'
            style={{textDecoration:'none'}}>{props.l.AboutDesc}</NavLink>                      
            <NavLink to='/contact'
            style={{textDecoration:'none'}}>{props.l.Contact}</NavLink>   
            <NavLink to='/buy'
            style={{textDecoration:'none'}}>{props.l.Buy}</NavLink>
  <div style={{marginTop:'20px'}}>
        <a href='/'>
            <img src={apple}/>
        </a>
        <a href='/'>
            <img src={google}/>
        </a>
    </div>
    </div>
       
        </>
   
    
    )
}
let mapStateToProps=(state)=>{
    return{
         lang:state.Lang.lang,
         text:state.Lang.text,
         textErr:state.Login.text,
         l:state.Lang.translations,
    }
    
}
let Cont=ToProfRedirect(Registr_ss)

export default connect(mapStateToProps, {postCreateAccountThunkCreator})(Cont)



