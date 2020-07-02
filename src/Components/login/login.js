import React from 'react';
import { connect } from 'react-redux';
import { postLoginThunkCreator, isAuthCreateAction } from './loginReducer';
import Langs from '../langs/Langs';
import {  NavLink, Redirect} from 'react-router-dom';
import style from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from '../../photo/log.png'
import apple from '../../photo/apple.png'
import google from '../../photo/google.png'
import { ToProfRedirect } from '../../toProfRedireckt';
import { getProfData } from '../profile/profInfoReducer';


const Login_ss=(props)=>{
  
    props.getProfData()
    if(props.fullName){
        props.isAuthCreateAction(true)
    }

    const OnchangeEmPW=(e)=>{
     e.preventDefault()
    let email=e.currentTarget.email.value
     let password=e.currentTarget.password.value
     props.postLoginThunkCreator(props.lang, email, password)
     
   }

    return(
        <>
        <div>
            <div >
                   
                {props.textErr}
            </div>
            <div className={style.headerLog}>
                <a href='#'><img src={log}/></a><br/>
                {props.l.MainDescription}</div>
        </div>
        <div>
           
   
           <form onSubmit={OnchangeEmPW}>
                <div className={style.form}>  <Langs s='sss'/>
                    <div  style={{textAlign:'left'}} >{props.l.Email}</div>
                        <input type='email' name='email' />
                    
                    <div style={{textAlign:'left'}}>{props.l.Password} </div>
                        <input type='password'name='password' />
                   
                    <button >{props.l.BtnSignIn}</button> 
                    <div className={style.Sing}>
                        <NavLink to='/lostpas'
                        style={{textDecoration:'none'}}>{props.l.LostPassword}</NavLink>
                        <NavLink to='/reg'
                        style={{textDecoration:'none'}}>{props.l.SignUp}</NavLink>
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
         l:state.Lang.translations,
         textErr:state.Login.text,
         fullName:state.InfoData.fullName
    }
    
}
let Cont=ToProfRedirect(Login_ss)

export default connect(mapStateToProps, {
    postLoginThunkCreator,getProfData,isAuthCreateAction})(Cont)


