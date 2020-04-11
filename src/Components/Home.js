import React from 'react';
import {Redirect, NavLink, Link, Route, Router, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCookie } from './Login_Regisr/Registration';
import Header from './Header/Header';
import AddBalance from './Update/AddBalance';
import './home.css'
import { Primer } from './primer/primer';


class Home extends React.Component{
  constructor() {
    super();
 
    this.state={
      name:undefined,
      email:undefined,
      country:undefined,
      balance:undefined,
      photosm:undefined,
      photobig:undefined,
      balance:undefined,
      addBalance:false,
      error:undefined,
      errorr:undefined,
      load:true ,
      ss:'deded'
       }     
      }

  

componentDidMount() {
  let token=getCookie('mytoken')
  fetch(`http://api.utigps.com/account/info?lang=en&token=${token}`)
    .then(res => res.json())
    .then( (result) => {this.setState({name: 'Hi mr'+' '+ result.data.fullname,
                                        email:result.data.email,
                                        country:'yor coutry:' + ' ' + result.data.country.title,
                                        photosm:result.data.photo.small,
                                        photobig:result.data.photo.large,
                                        balance:'your balance'+' '+result.data.balance.text  })  }   )        
   .catch(error=>{this.setState({errorr:'problems in the server'})})
}
  
   
 componentDidUpdate(){
  if(this.state.photobig=='http://api.utigps.com/assets/images/nophoto.png' ){
  this.setState({
    photobig:"https://i.pinimg.com/originals/ae/01/80/ae0180e59a50fd251f63f0acc9f44944.jpg",
    photosm:"https://m.spletnik.ru/img/2012/10/liza/20121011-atarantino-18.jpg",
    load:false
  })} 
}
 
addBalanse=()=>{
  this.setState({addBalance:true})
  
}

  render(){
      
    let mytoken=getCookie('mytoken')
    if(mytoken!=undefined){      
    if(mytoken.length==0){  return (<Redirect to={'login'}/>)  } 

    if(this.state.addBalance){   return(<AddBalance name={this.state.name} balance={this.state.balance} />)}
      }else {return (<Redirect to={'login'}/>)}

    if(this.state.load){return(<Primer />)}
        
 
        
    return(
      <div> 
           <Header /> 

          <div class="container">
            <div class="row">
		          <div class="col-lg-8 col-sm-12" style={{margin:'auto'}}>
	              <div class="card hovercard">
                  <div class="cardheader">
                  </div>
                  <div class="avatar">
                      <img src={this.state.photobig}/>
                  </div>              
                  <div class="info">
                      <div class="title">
                        <h3>{this.state.name}</h3>
                      </div>
                      <div class="desc"><p className="card-text">{this.state.country}</p></div>
                      <div class="desc"><p className="card-text">{this.state.email}</p></div>
                      <div class="desc"><p className="card-text">{this.state.balance}</p></div>
                  </div>
                  <div class="bottom">
                    <button onClick={this.addBalanse}>add balance</button>
                  </div>                    
                </div>
              </div>

            </div>
          </div>
      </div>)
  }
}

export default Home;


