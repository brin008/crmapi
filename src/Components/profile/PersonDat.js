import React, { useState, useEffect, useReducer } from 'react';
import { getCookie } from '../login/loginReducer';

const PersonData=(props)=>{


if(props.countrues.length<2 ){ props.getCountrues()}

let countr=props.countrues.map(c=>{return(<option key={c.id} value={c.id}>{c.title}</option>)})
   
 const ProfCang=(e)=>{debugger
  e.preventDefault()
  let fName=e.currentTarget.elements.fname.value;
 }  
   
   
   return(<>
    <div className=' p-4 mt-3 ' style={{background:'white', borderRadius:'5px'}}>
      <div className='border-bottom mb-2 '><p class="text-muted"> {props.t.PersonalInformation}</p></div> 
    <form onChange={ProfCang}>

  <div class="form-group row ">
    <label for="inputEmail3" class="col-sm-3 col-form-label text-md-right">UserID</label>
    
    <div class="col-sm-4">
      <input readonly="readonly"  type="text" value={props.id} class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-3 col-form-label text-md-right">{props.t.Fullname}</label>
    <div class="col-sm-4">
      <input type="email" name='fname' value={props.fullName} class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-3 col-form-label text-md-right">{props.t.Country}</label>
    <div class="col-sm-4">
      <select class="form-control" id="inputEmail3">

                    <option >{props.countru}</option>    
                   {countr}
                     </ select>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-3">
    </div>  <button type="button" class="btn btn-success 
    bg-success btn-sm ml-3 " style={{height:'40px', borderRadius:'5px'}}>
      { props.t.BtnSave}</button>
  </div>

 </form>
    </div> 
    </>
    )
}
export default PersonData