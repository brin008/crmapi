import React from 'react';
import {Redirect, NavLink, Link, Route, Router, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getCookie } from '../Login_Regisr/Registration';
import '../home.css'
import Header from '../Header/Header';





   class AddBalance extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
        email:undefined,
        status:undefined,
        description:undefined,
        balance: props.balance
         }
         
      
        }

    

        

        getip2=async(event)=>{
           event.preventDefault()
           let token=getCookie('mytoken')

           const code=event.target.elements.code.value;
           const url_s=await fetch(`http://api.utigps.com/balance/add?lang=&token=${token}&code=${code}&`)

           let dd=await url_s.json();
        
          this.setState({
              status:dd.status
                          })
          if (this.state.status==="success"){
                
              this.setState({
                
               
                  status:dd.status,
                  description:dd.description,
                  balance: dd.data.balance.text
              })
         
          }
           
        }

    render(){
   
        return(
        <div>
            <Header />
                <div className="container">
                    <div className="row">
		                <div className="col-lg-8 col-sm-12" style={{margin:'auto'}}>
	                        <div className="card hovercard">
                                <div className="cardheader">
                                </div>
                                <p>{this.state.balance}</p>

                                <form onSubmit={this.getip2}>       

                                <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                      <input type="text" name='code' className="form-control" id="inputPassword2" placeholder="new name"/>
                                </div>

                                    
                                <button className="btn btn-outline-success" >Update</button>
                                 </form>     
                                <p >{this.state.email}</p>
                                <p>{this.state.status}</p>
                                <p>{this.state.description}</p>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>   )
    }
 }

    


export default AddBalance;