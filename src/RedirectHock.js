import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToPropsForRedirect=(state)=>{
  return{
      isAuth:state.Login.isAuth}  
}

export const WithAuthRedirect=(Component)=>{
class RedirectComponent extends React.Component{
    render(){
        if(!this.props.isAuth){
            return <Redirect to='/log' />}
            else{return < Component {...this.props} />}
        
    }
}


let ConectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConectedAuthRedirectComponent
}
