import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { getCookie } from '../Login_Regisr/Registration';
import Header from '../Header/Header';


 class UpdatePassword extends React.Component{

    constructor(){
        super();
        this.state={
            status: undefined,
            description:undefined,
            notName: undefined
        }
        
    }

    UpdateInfo=async(event)=>{ 
        event.preventDefault()
        let token=getCookie('mytoken')
        const oldpassword=event.target.elements.oldpassword.value;
        const newpassword=event.target.elements.newpassword.value;
        const repassword=event.target.elements.repassword.value;

        if(oldpassword.match(/[0-9]{6,20}[a-z]/g)){
            if(newpassword.match(/[0-9]{6,20}[a-z]/g)){
                if(newpassword==repassword){
        const api_url=await
        fetch(`http://api.utigps.com/account/password?lang=en&token=${token}&oldpassword=${oldpassword}&password=${newpassword}&repassword=${repassword}&`)
        const dat=await api_url.json();
        
       
       this.setState({description: dat.description,
                    status:dat.status })
              
       } else{ this.setState({status:'error!  not badly repeated the password'})}
       }else{ this.setState({status:'error! new password is too short'})}
    }else{ this.setState({status:'error! old password is too short'})}


    } 

    toHome=()=>{
        if(this.state.status=="success"){
        return(<NavLink to='/'>Go to home</NavLink>)} else{
            return null
        } 
    }

    render(){
        if(getCookie('mytoken').length==0 || getCookie('mytoken')==undefined ){
            return (<Redirect to={"/login"} />
                )}

        return(
            <div>
            <Header />
            <div className="container">
                    <div className="row">
		                <div className="col-lg-8 col-sm-12"  style={{margin:'auto'}}>
	                        <div className="card hovercard">
                                <div className="cardheader">
                                </div> 
                                <h3 style={{ fontFamily: "Roboto" , margin:'2%'}}>Change password</h3>   
                                    <h4 style={{ fontFamily: "Roboto" , margin:'2%', color:'red'}}>{this.state.status}</h4>

                                    <form onSubmit={this.UpdateInfo}>
                               {/* ввод пароли       */}
                                <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                      <input type="password" name='oldpassword' className="form-control" id="inputPassword2" placeholder="oldpassword"/>
                                </div>
                                <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                      <input type="password" name='newpassword' className="form-control" id="inputPassword2" placeholder="new password"/>
                                </div>
                                <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                      <input type="password" name='repassword' className="form-control" id="inputPassword2" placeholder="repassword"/>
                                </div>

                                <p>{this.state.description}</p> 
                                <button className="btn btn-outline-success" >Update</button>

                                  </form>
                                  <din style={{margin: '5%'}}>
                                   {this.toHome()}  
                                </din>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   )
    }


}

export default UpdatePassword
