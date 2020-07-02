import { InitialisAPI } from "../../api_newStore"
import { getCookie } from "../login/loginReducer"

let ADD_DATA='ADD_DATA'
let IS_AUTH='IS_AUTH'
let ADD_CONTRUES='ADD_CONTRUES'
let LOG_OUT='LOG_OUT'

let initialState={
countrues:[],
country:'',
id:'',
fullName:'',
balans:'',
email:'',
isAuth:false,
logout:false
    }

export const ProfInfoReduser=(state=initialState, action)=>{
  switch(action.type){

    case ADD_DATA:
   return{
        ...state, country:action.country ,id:action.id,
        fullName:action.fullName, balans:action.balans,
        email:action.email
    }
    case IS_AUTH:
      return{
           ...state, isAuth:action.isAuth} 
    
    case ADD_CONTRUES:
      return{
        ...state, countrues:action.countrues
    }
    case LOG_OUT:
      return{
        ...state, logout:action.logout
    }
    
    
    default: return state
  } 
 
}
export const addProfInfoAC=(country,id,fullName,balans, email)=>({type:ADD_DATA,country,id,fullName,balans, email})     
const isAuthAC=(isAuth)=>(IS_AUTH, isAuth)
const logOutACs=(logOut)=>(LOG_OUT,logOut)
const addCountrues=(countrues)=>({type:ADD_CONTRUES,countrues})

export const getProfData=(lang=getCookie("lang"), token=getCookie("mytoken"))=>{
  return(dispatch)=>{
       InitialisAPI.meAPI(lang,token).
       then(data=>{debugger; if(data.status==='success'){
        dispatch (addProfInfoAC(data.data.country.title,data.data.id,data.data.fullname, data.data.balance.text, data.data.email ))
       }  }
       )
  }
}
export const getCountrues=(lang=getCookie("lang"))=>{
  return(dispatch)=>{debugger
       InitialisAPI.CountrySetAPI(lang).
       then(data=>{debugger
        dispatch (addCountrues(data))
       }  
       )
  }
}

export const updateProf=(lang=getCookie("lang"), token=getCookie("mytoken"),fName,newCount)=>{
  return(dispatch)=>{
       InitialisAPI.updateProfAPI(lang,token,fName,newCount ).
       then(data=>{
        dispatch (addProfInfoAC(data.country.title,data.id,data.fullname, data.balance.text, data.email ))
       }  
       )
  }
}
export const logOutac=(lang=getCookie("lang"), token=getCookie("mytoken"))=>{
  return(dispatch)=>{
       InitialisAPI.logOutfAPI(lang,token ).
       then(data=>{if(data.status==='success'){
       }})
      
  }
}

