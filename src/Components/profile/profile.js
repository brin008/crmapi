import React from 'react';
import { connect } from 'react-redux';
import { getProfData } from './profInfoReducer';
import user from '../../photo/user.png'
import  './profile.css'
import Header from '../header/Header';
import { WithAuthRedirect } from '../../RedirectHock';


const Data=(props)=>{
    return(<>
        <div class="col-0" style={{float:'left', width:'300px', marginLeft:'50px'}}>
        
  <h2>{props.t.PersonalInformation}</h2>
 
  <form action="/action_page.php">

    <div class="form-group">
      <input type="text" disabled class="form-control" placeholder={props.id} name="text2"/>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder={props.fullName} name="text2"/>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder={props.countru} name="text2"/>
    </div>
  </form>
</div>
        
   </> )
}


export const Profile_ss=(props)=>{
props.getProfData()
  
  
    return(<>

<Header/>
        <div classname="container-fluid" >
           
            
                <div className=" bg-light" style={{padding:'0', width:'20%', float:'left'}}>
                    <div style={{borderBottom:'1px solid '}}>
                        <img style={{ width:'30%', margin:'10px'}} src={user}/>
                        <div>{props.fullName}</div> <div>{props.balans}</div>
                    </div>
                    <div style={{padding:'10px'}}>
                    <ul class="nav  flex-column" >

                        <li class="nav-item" style={{paddingTop:'3px'}}>
                            <a style={{ textAlign:"left"}} className="nav-link active btn btn-light " data-toggle="pill" href="#home">
                                <div style={{marginRight:'7px', float:'left', color:'blue', fontSize:'25px', marginTop:'0px'}}>
                                    <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    </svg>
                                </div>
                                {props.t.PersonalInformation}
                            </a>
                        </li>

                        <li className="nav-item" style={{paddingTop:'4px'}}>
                            <a style={{ textAlign:"left"}} className="nav-link  btn btn-light btn-primary" data-toggle="pill" href="#home">
                                <div  style={{marginRight:'7px', float:'left', color:'blue', fontSize:'22px', marginTop:'-9px'}}>
                                    <svg class="bi bi-lock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                                    </svg>
                                </div>
                                {props.t.ChangePassword}
                            </a>
                        </li>

                        <li class="nav-item" style={{paddingTop:'4px'}}>
                            <a style={{ textAlign:"left"}} class="nav-link  btn btn-light btn-primary" data-toggle="pill" href="#home">                     
                                <div style={{marginRight:'7px', float:'left', color:'blue', fontSize:'25px', marginTop:'-9px'}}>
                                    <svg class="bi bi-at" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                                    </svg>
                                </div>      
                                {props.t.VerifyEmail}
                            </a>
                        </li>

                        <li class="nav-item" style={{paddingTop:'4px'}}>
                            <a style={{ textAlign:"left"}} class="nav-link  btn btn-light btn-primary" data-toggle="pill" href="#home">                     
                                <div style={{marginRight:'7px', float:'left', color:'blue', fontSize:'25px', marginTop:'-9px'}}>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                </div>      
                                {props.t.Deposit}
                            </a>
                        </li>

                        <li class="nav-item" style={{paddingTop:'4px'}}>
                            <a style={{ textAlign:"left"}} class="nav-link  btn btn-light btn-primary" data-toggle="pill" href="#home">                     
                                <div style={{marginRight:'7px', float:'left', color:'blue', fontSize:'25px', marginTop:'-9px'}}>
                                    <svg class="bi bi-list-task" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                                    </svg>
                                </div>      
                                {props.t.Transactions}
                            </a>
                        </li>

                        <li class="nav-item"style={{paddingTop:'20px'}}>
                            <a style={{ textAlign:"left"}}
                            class="nav-link  btn btn-light btn-primary" data-toggle="pill" href="#home">
                            <div style={{marginRight:'15px', float:'left', color:'blue', fontSize:'25px', marginTop:'-9px'}}> 
                            <svg class="bi bi-box-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.646 11.354a.5.5 0 0 1 0-.708L14.293 8l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                                <path fill-rule="evenodd" d="M2 13.5A1.5 1.5 0 0 1 .5 12V4A1.5 1.5 0 0 1 2 2.5h7A1.5 1.5 0 0 1 10.5 4v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V12A1.5 1.5 0 0 1 9 13.5H2z"/>
                            </svg>
                             </div>   {props.t.Logout}</a>
                        </li>
 
                    </ul>
                   
                </div>
            </div>
      
        </div>
    <div >
        <Data {...props}/>
    </div>
    
    </>
        
    )
}
 let contein= WithAuthRedirect(Profile_ss)
let mapStateToProps=(state)=>{
    return{
       countru: state.InfoData.country,
       t:state.Lang.translations,
       id:state.InfoData.id,
        fullName:state.InfoData.fullName,
        balans:state.InfoData.balans,
    }
}


export default connect(mapStateToProps,{getProfData})(contein) 
