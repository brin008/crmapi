import React, { useState, useReducer, useEffect } from 'react';
import { connect } from 'react-redux';
import { GetLang,SetLang} from './langReducer';
import  './langs.css'
import { getCookie, setCookie } from '../login/loginReducer';
import { getCountrues } from '../profile/profInfoReducer';

 const LangsExpress=(props)=>{

    if(props.langs.length<2){
        if(getCookie('lang')){ props.GetLang(getCookie('lang'))
      props.SetLang(getCookie('lang'))}
        else{props.GetLang()}
        }

    let but=props.langs.map(l=>{return( 
            <button className="dropdown-item" key={l.short_code} value={l.short_code}
            onClick={e =>OnChangePropsLang(e.currentTarget.value)}>
                {l.title}  
             </button>)})
      
    const OnChangePropsLang=(e)=>{
        props.SetLang(e)
        setCookie('lang', e,2)
        props.getCountrues(e)
        }  
        
    return(<>
   
     <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.butLangName}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {but}
        </div>
      </li>
  
    </>
    )
}
let mapPropsToState=(state)=>{
    return{
        lang:state.Lang.lang,
        langs:state.Lang.langs,
        butLangName:state.Lang.butLangName
    }
}


export default connect(mapPropsToState, { GetLang,SetLang ,getCountrues})(LangsExpress) 