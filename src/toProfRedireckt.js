import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCookie } from './Components/login/loginReducer';

let mapStateToPropsForRedirect=(state)=>({
    isAuth:state.Login.isAuth
})

export const ToProfRedirect=(Component)=>{
class RedirectComponent extends React.Component{
    render(){
        if( getCookie('mytoken').length>12 &&this.props.isAuth){
            return <Redirect to='/prof' />}else{ return < Component {...this.props} />}
            
       
    }
}


let ConectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConectedAuthRedirectComponent
}
