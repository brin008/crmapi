import React, { useState, useReducer, useEffect } from 'react';
import rus from '../../photo/rus.jpg'
import aze from '../../photo/aze.jpg'
import eng from '../../photo/eng.jpg'
import { connect } from 'react-redux';
import { GetLang,SetLang} from './langReducer';
import  './langs.css'
import { getCookie, setCookie } from '../login/loginReducer';

 const Langs=(props)=>{

  if(props.langs.length<2){
    if(getCookie('lang')){ props.GetLang(getCookie('lang'))
  props.SetLang(getCookie('lang'))}
    else{props.GetLang()}
     
    }

 let but=props.langs.map(l=>{return( <div key={l.short_code} class="dropdown-item">
 <span  type='submit' id={l.short_code}onClick={e =>OnChangePropsLang(e.currentTarget.id)}>
    {l.title}  
    </span></div>)})

  const OnChangePropsLang=(e)=>{debugger
   
    props.SetLang(e)
    setCookie('lang', e,2)
        }  
    

    return(
    <div >    
      <span  type="button" className={props.s} data-toggle="dropdown" >
        {props.s==='sss'?props.lang:props.butLangName}
        </span>
      <div  class="dropdown-menu"  >{but}</div>
    </div>
    
    )
}
let mapPropsToState=(state)=>{
    return{
        lang:state.Lang.lang,
        langs:state.Lang.langs,
        butLangName:state.Lang.butLangName
    }
}


export default connect(mapPropsToState, { GetLang,SetLang })(Langs) 