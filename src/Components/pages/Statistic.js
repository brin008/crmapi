import React from 'react';
import  '../../express.css'
import { useState } from 'react';
import { WithAuthRedirect } from '../../RedirectHock';




const Statistic=(props)=>{
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  let s=yyyy+'-'+mm+'-'+dd
  let st = dd.replace(/(^|\s)0/g, "$1")
  let toDate=parseInt(st)+10
const formDay=()=>{
if(toDate.length<2){
  toDate="0"+toDate
}return toDate
}

 let daTo=yyyy+'-'+mm+'-'+formDay()

  let [dat, setDat]=useState(s)
  let [to, setTo]=useState(daTo)

 const letDat=(e)=>{
   e.preventDefault() 
  let date=e.currentTarget.value
   setDat(date)
 }
 const datTo=(e)=>{
   setTo(e.currentTarget.value)
 }


  return(<> 
<div className='container mw-100  h-100' >
  <div className="row ">
    <div className="col-sm-4 border-right  p-3">
    <form >
 
<div class="form-group row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Form</label>
    <div class="col-sm-5 pr-1">
    <input  className="form-control" type="date" id="start" name="trip-start"
       value={dat} onChange={letDat}
       min="2018-01-01" max="3018-12-31"/>
    </div>
    <div class="col-sm-3 pl-1">
    <input className="form-control"  type="time" name="selected_time" list="time-list"/>
    </div>
</div>
<div class="form-group row">
    <label for="inputPassword" class="col-sm-4 col-form-label">To</label>
    <div class="col-sm-5 pr-1">
    <input  className="form-control" type="date" id="start" name="trip-start"
       value={to} onChange={datTo}
       min="2018-01-01" max="3018-12-31"/>
    </div>
    <div class="col-sm-3 pl-1">
    <input className="form-control"  type="time" name="selected_time" list="time-list"/>
    </div>
</div>
<div class="form-group row">
    <div class="col-sm-4"></div>
    <div class="col-sm-8 "><button type="button" class="btn btn-success 
    bg-success btn-sm btn-block " style={{height:'40px', borderRadius:'5px'}}>Build</button></div>
</div>


    </form>

    
    
    </div>
  <div className="col-sm-8   p-0" style={{height:'90vh'}}>
    
     
  
    </div>
  </div>
  
</div>
</>  )
}
let s=WithAuthRedirect(Statistic)
export default s


  