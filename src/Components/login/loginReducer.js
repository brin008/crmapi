import { InitialisAPI } from "../../api_newStore"

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
 export  function deleteCookie(cookieName) {
	
    setCookie(cookieName, "", {
	  'max-age': -1
	 
    })
 }

 let IS_AUTH='IS_AUTH'
let ADD_TEXT='ADD_TEXT'
let initialState={
   text:'',
   isAuth:false
     }

export const loginReduser=(state=initialState, action)=>{
     switch(action.type){

        
          case ADD_TEXT:
               return{
                    ...state, text:action.text
               }   
          case IS_AUTH:
                    return{
                         ...state, isAuth:action.isAuth
                    }   
  
   default: return state
     }}

export const addTextCreateAction=(text)=>({type:ADD_TEXT,text})
export const isAuthCreateAction=(isAuth)=>({type:IS_AUTH,isAuth})

export const postLoginThunkCreator=(lang,email,password)=>{
     return(dispatch)=>{debugger
          InitialisAPI.loginAPI(lang,email,password).
          then(data=>{debugger
               if(data.status==="error"){
                dispatch ( addTextCreateAction(data.description))
          }else {setCookie("mytoken", data.token,2)
          dispatch(isAuthCreateAction(true))}
          })
     }
}
export const postCreateAccountThunkCreator=(lang,fullname, password,email,country)=>{
     return(dispatch)=>{
          InitialisAPI.registrAPI(lang,fullname, password,email,country).
          then(data=>{debugger
               if(data.status==="error"){
                dispatch ( addTextCreateAction(data.description))
          }else{ setCookie("mytoken", data.token,2)
          dispatch(isAuthCreateAction(true))}
          })
     }
}
