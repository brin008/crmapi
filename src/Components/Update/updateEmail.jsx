import React from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie } from '../Login_Regisr/Registration';
import Verufy from './Verufy';
import Header from '../Header/Header';


 class UpdateEmail extends React.Component{

    constructor(){
        super();
        this.state={
            email:undefined,
            notName: undefined,
            oldemail:undefined,
            status:undefined,
            description:undefined
        }
   }

    UpdateInfo=async(event)=>{ 
        event.preventDefault()
        let token=getCookie('mytoken')
        const email=event.target.elements.email.value;

        if(email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){

        const api_url=await
        fetch(`http://api.utigps.com/account/updateemail?lang=en&token=${token}&email=${email}&`)
        const dat=await api_url.json();
       
     
        this.setState({email:dat.data.email,
                    oldemail:dat.data.email,
                    notName: 'changes were successful',
                    status:dat.status,
                    description:dat.description  })
   
        }else { this.setState({notName: 'you dont change email' })
           
               }        
    } 

  

    render(){

        if(getCookie('mytoken').length==0 || getCookie('mytoken')==undefined ){
            return (<Redirect to="/login" />  )}
              
        if(this.state.status=='success'){
                    return(<Verufy email={this.state.email} />)}

        return(
            <div>
            <Header />
            <div className="container">
                    <div className="row">
		                <div className="col-lg-8 col-sm-12"  style={{margin:'auto'}}>
	                        <div className="card hovercard">
                            <div className="cardheader">
                            </div>
                             <h3 style={{ fontFamily: "Roboto" , margin:'2%'}}>Change Email</h3> 

                            <h4 style={{ fontFamily: "Roboto" , margin:'2%'}}>{this.state.status}</h4>

                            <form onSubmit={this.UpdateInfo}>
                                <p  style={{ fontFamily: "Roboto" , margin:'2%'}}>{this.state.notName}</p>

                                <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                    <input type="text" name='email' className="form-control" id="inputPassword2" placeholder="new email"/>
                                </div>

                                <p>{this.state.name}</p>
                                <button className="btn btn-outline-success" >Update</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                
        )}
}

export default UpdateEmail
