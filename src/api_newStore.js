import *as axios from 'axios'


let API_utigps=axios.create({
    withCredential:true,
    baseURL:`http://api.utigps.com/`
   
  
})

export const InitialisAPI={
    registrAPI(lang,fullname, password,email,country ){
        return API_utigps.post(`register?lang=${lang}
        &fullname=${fullname}&password=${password}
        &email=${email}&country=${country}`)
        .then(responce=>{ return responce.data});
}, 
    loginAPI(l,e,p){
    return API_utigps.post(`auth/signin`,`lang=${l}&email=${e}&password=${p}` )
    .then(responce=>{ return responce.data});
},
    meAPI(l,t){
        return API_utigps.get(`account/info?lang=${l}&token=${t}` )
        .then(responce=>{debugger; return responce.data})
    }, 

    langGetAPI(lang, token){
        let l=''
        if(lang!=undefined){
             l=lang
        }
        return API_utigps.get(`settings?lang=${l}`)
        .then(responce=>{ return responce.data})
    },
    langSetAPI(lang, token){
        return API_utigps.post(`settings/translations?lang=${lang}`)
        .then(responce=>{ return responce.data.data})
    },
    CountrySetAPI(lang){
        return API_utigps.post(`data/countries?lang=${lang}`)
        .then(responce=>{ return responce.data.data})
    },
    updateProfAPI(lang,token,fName,newCount){
        return API_utigps.post(`account/update?lang=${lang}&token=${token}&fullname=${fName}&country=${newCount}`)
        .then(responce=>{ return responce.data.data})
    },
    logOutfAPI(lang,token){
        return API_utigps.post(`account/logout?lang=${lang}&token=${token}`)
        .then(responce=>{ return responce.data})
    }

}