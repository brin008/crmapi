import React from 'react';

import { Redirect, NavLink } from 'react-router-dom';
import { getCookie } from '../Login_Regisr/Registration';
import Header from '../Header/Header';


const Resultat=(props)=>{
   let name=props.name
   if (name!=undefined){
    return(
        <p>
            You new login name: {name}
        </p>
    )} else return null
}

 class UpdateLog extends React.Component{

    constructor(){
        super();
        this.state={
            name:undefined,
            notName: undefined,
            description:undefined,
            emailOrPas:undefined,
            status:' Write the name first letter large'
        }
        
    }

    UpdateInfo=async(event)=>{ 
        event.preventDefault()
        let token=getCookie('mytoken')
        const name=event.target.elements.fullname.value;
        const country=event.target.elements.country.value;

         if (name.match(/[A-Z][a-z]{2,20}/g)){
             
        const api_url=await
        fetch(`http://api.utigps.com/account/update?lang=en&token=${token}&fullname=${name}&country=${country}&`)
        const dat=await api_url.json();
         this.setState({name:dat.data.fullname,
        notName:"Your name has been changed "
                    
    })
    }else {
        this.setState({ notName:" Please check for name errors  ",
      })
       
    }

    }
 
    toHome=()=>{
        if(this.state.notName=="Your name has been changed "){
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
                                    </div> <h3 style={{ fontFamily: "Roboto" , margin:'2%'}}>Change Name</h3>   
                                    <h4 style={{ fontFamily: "Roboto" , margin:'2%'}}>{this.state.status}</h4>
                                <form onSubmit={this.UpdateInfo}>
                               {/* ввод имени       */}
                                <div  style={{width:'80%', margin:'2% 10% 1%'}}>
                                      <input type="text" name='fullname' className="form-control" id="inputPassword2" placeholder="new name"/>
                                </div>
                                        {/* выбор страны */}
                                <select  className="form-control" name='country'  
                                        placeholder='country' style={{width:'80%', margin:'2% 10% 1%', border:'non'}} >
                                        <option value='1'>Azerbaijan</option>
                                        <option value='2'> Georgia</option>Russia
                                        <option value='3'>Russia</option>
                                </ select>
                                
                                <h5 style={{ fontFamily: "Roboto" , margin:'2%'}}>
                                    {this.state.notName}{this.state.name}
                                </h5>
                                
                                <p >{this.state.description}</p> 

                                
                                <button className="btn btn-outline-success" >Update</button>

                               
                                </form>    
                                <din style={{margin: '5%'}}>
                                   {this.toHome()}  
                                </din>
                             
                            </div>
                        </div>
                    </div>
                    </div>
       
        </div>   )

                

    }


}

export default UpdateLog
