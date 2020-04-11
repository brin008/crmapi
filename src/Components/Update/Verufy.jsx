import React from 'react';
import {Redirect, NavLink, Link, Route, Router, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import { getCookie } from '../Login_Regisr/Registration';
import VerufyPath2 from './VerufyPath2';
import { Primer } from '../primer/primer';




class Verufy extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
        email:undefined,
        status:undefined,
        description:undefined,
        load: false,

         }

        }

        

      getip2=async(event)=>{
        
        this.setState({ load:true})
        event.preventDefault()
      
           let token=getCookie('mytoken')
           
           const email=event.target.value;
           if(email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
           const url_s=await fetch(`http://api.utigps.com/account/emailverifystep1?lang=&token=${token}&email=${email}&`)
           let dd=await url_s.json();

        
          this.setState({ load:true,
              status:dd.status
                          })
          if (this.state.status==="success"){
 
              this.setState({
                
                  email:email,
                  status:dd.status,
                  description:dd.description 
              })
         
          }
           
        }else { this.setState({ status:'You have not verified email', load:false})}
      }

    loading=()=>{
      if(this.state.load){
        return(<Primer/>)}else{return null}
      
    }
   
     

     


 
    render(){

      if(this.state.status=='success'){
        return(<VerufyPath2  email={this.state.email} description={this.state.description}/>)
      }
         
        
        return(
         
            <div>
              <div>
              <Header />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-sm-12"  style={{margin:'auto'}}>
                        <div className="card hovercard">
                          <div className="cardheader">
                          </div> 
                          <h3 style={{ fontFamily: "Roboto" , margin:'2%'}}>
                            Verif Email
                          </h3>   
                          <h4 style={{ fontFamily: "Roboto" , margin:'2%'}}>
                          please confirm the email
                          </h4>
                        <form >
                          <p  style={{ fontFamily: "Roboto" , margin:'2%'}}>
                            {this.state.description}
                          </p>
                          <div className="form-check">

                         
                          <label className="form-check-label" >
                             <input claclassNamess="form-check-input" type="checkbox" name='email' value={this.props.email}
                          id="defaultCheck1" onChange={this.getip2}/>
                             {this.props.email}
                          </label>

                          </div>
                         
                          <p>{this.state.status}</p>
                          
                        </form>
                        <div style={{margin: '2% 43%'}}>{this.loading()}</div>

                        <a href='/updateEm'> if this email is not yours, go back</a>
                       </div>
                     </div>
                    </div>
                  </div>
                </div>     
              </div>
   
     )
    }
 }
  
    

      
export default Verufy;