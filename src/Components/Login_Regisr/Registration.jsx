import React from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import s  from   './input.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function getCookie(cookieName){
    let matches = document.cookie.match(new RegExp(
       "(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
     ));
     return matches ? decodeURIComponent(matches[1]) : undefined;
}


export function setCookie(cookieName,cookieValue,expireDate){
    var dateTime = new Date();
    console.log("my cookie name: "+cookieName+" value: "+cookieValue);
    dateTime.setTime(dateTime.getTime()+(expireDate*24*60*60*1000));
    document.cookie = cookieName+"="+cookieValue+"; expires="+dateTime.toGMTString();

} 



class Registration extends React.Component{
    constructor(){
        super();
      
        this.state={
          result:undefined,
          status: undefined,
         description: undefined,
         name: undefined,
         email:undefined,
         token: undefined,
         data: undefined,
         redirectToReferrer: false
         }
      } 
        
    getinfo=async(event)=>{
          
        event.preventDefault()
        const fname=event.target.elements.fullname.value;
        const password=event.target.elements.password.value;
        const country=event.target.elements.country.value;
        const email=event.target.elements.email.value;
        const lang=event.target.elements.lang.value;

        if (fname.match(/^[a-z]+([-_]?[a-z0-9]+){0,2}$/i)){ 
            if(email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
                if(password.match( /[0-9]{6,20}/g)){
                    const api_url=await 
                    fetch(`http://api.utigps.com/register?lang=${lang}&fullname=${fname}&password=${password}&email=${email}&country=${country}`);
                    const dat=await api_url.json();
                  
                    this.setState( {description:dat.description,
                            token:dat.token,
                            status:dat.status } )

                        if (this.state.status ==="success"){
                            setCookie("mytoken", dat.token,2)
                        this.setState({name:dat.data.fullname,
                        result:'Dear '+dat.data.fullname+' u are succesfully registered',
                        email:dat.data.email})
                         };

                }else { this.setState({description:'password is too short'})  }
            }else { this.setState({description:'wrong email'}) }
        }else { this.setState({description:'not name'}) } 
        
    }


    componentDidUpdate(){
        if ( this.state.status==="success") { return (<Redirect to={"/"} />)  }
    }
   
    render(){
  
        var nameCookie=getCookie('mytoken');
        if(nameCookie!=undefined)
        if(getCookie('mytoken').length>0){return (<Redirect to={"/"} /> ) }
         
        return(
               
                        <div className={s.form } style={{margin:"80px auto"}}> 
       
            <form onSubmit={this.getinfo} >
                
                <input type='text' name='fullname' placeholder='name'/>   
                <input type='password' name='password' placeholder='password' />            
               
                <select className="form-control"   name='country' placeholder='country' style={{marginBottom: '5%'}}>
                    <option value='1'>Azerbaijan</option>
                    <option value='2'> Georgia</option>Russia
                    <option value='1'>Russia</option>
                </ select>

                <input type='email' name='email' placeholder='email'  />
              
                <select className="form-control"   name='lang' placeholder='lang' style={{marginBottom: '5%'}}>
                    <option value='az'>az</option>
                    <option value='en'>en</option>
                    <option value='ru'>ru</option>
                </select>
              
                <button >registration</button>      
               <div>{this.state.result}</div>
               <div>{this.state.description}</div>
              
               <NavLink className='nav-link' to="/login">if you have login</NavLink>
           
            </form>
            </div>
                       
                  
     )
    }
 }

    


export default Registration;