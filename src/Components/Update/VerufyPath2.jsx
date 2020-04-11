import React from 'react';
import {Redirect, NavLink, Link, Route, Router, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import { getCookie } from '../Login_Regisr/Registration';




export   class VerufyPath2 extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
        email:undefined,
        status:undefined,
        description:undefined
         }
         
    
        }

    

        

        getip2=async(event)=>{
           event.preventDefault()
           let token=getCookie('mytoken')
           const email=this.props.email
           const code=event.target.elements.code.value;
           const url_s=await fetch(`http://api.utigps.com/account/emailverifystep2?lang=&token=${token}&email=${email}&&code=${code}&`)
        
           let dd=await url_s.json();
        
          this.setState({
              status:dd.status
                          })
          if (this.state.status==="success"){
 
              this.setState({
                
               
                  status:dd.status,
                  description:dd.description 
              })
         
          }
           
        }
        
     

     



    render(){

  
         
        
        return(
            <div>
            <Header />
            <div className="container">
                    <div className="row">
		                <div className="col-lg-8 col-sm-12"  style={{margin:'auto'}}>
	                        <div className="card hovercard">
                                <div className="cardheader">
                                    </div> <h3 style={{ fontFamily: "Roboto" , margin:'2%'}}>Verification Email</h3> 

                                    <h4 style={{ fontFamily: "Roboto" , margin:'2%'}}>{this.props.description}</h4>
                                    <form onSubmit={this.getip2}>

                                    <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                          <input className="form-control" id="inputPassword2" type='text' name='code' placeholder='code' />  
                                        </div>
                
            
                                        <button className="btn btn-outline-success" >Update</button>
           </form>
       
            <img c src={this.state.photobig} /> 
      
            <p >{this.state.email}</p>
            <p>{this.state.status}</p>
            <p>{this.state.description}</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
   
     )
    }
 }

    


export default VerufyPath2; 
    //  <div>
    //        <form onSubmit={this.getip2}>
                
    //             <input type='code' name='code' placeholder='code' />
    //             <button >Update</button>
    //        </form>
       
    //         <img c src={this.state.photobig} /> 
      
    //         <p >{this.state.email}</p>
    //         <p>{this.state.status}</p>
    //         <p>{this.state.description}</p>
          
         
    //      </div>