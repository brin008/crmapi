import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from '../App';



export const WithAuthRedirect=(Component)=>{
const rerndering=(props)=>{

const [state, setState] = useReducer((prevState, newState) => {
    return {...prevState, ...newState}},
    {
    langName:props.lang 
});

let[langName, setLangName]=useState(props.lang)

useEffect(()=>{
    setState({langName:props.lang})
    Lang()
   },[props.lang])  
return(< Component {...this.props} />)
let ConectedAuthRedirectComponent=connect(mapStateToProps)(rerndering)

    return ConectedAuthRedirectComponent
}}



let mapStateToProps=(state)=>{
    return{
        lang:state.Lang.lang
    }
}


