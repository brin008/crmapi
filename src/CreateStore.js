import { postReduser } from "./reducer/rootReduser"

let store={
     _State:{
          Dialog:{
              
               DialogsData:[
         
                    {id:1, name:'one' },
                    {id:2, name:'Too' },
                    {id:3, name:'Three' }],
       
               Sms:[
                    {id:1, sms:'aaa'},
                    {id:2, sms:'bbb'},
                    {id:3, sms:'ccc'} ]  },
          
     
         Post:{
              
               textNew:'',

               posts:[
                   {id:1, name:'San', message:'aaa', like:10},
                   {id:2, name:'Vad', message:'bbb', like:10},
                   {id:3, name:'Kod', message:'ccc', like:10}]}  ,
     
     
          SideBar:{
               names:[
                    {id:1, name:'sad'},
                    {id:2, name:'bass'},
                    {id:3, name:'cass'}
               ]
          }   },     

          _renderDomEliment(){console.log('change') },
               
          getState(){ return this._State  },
              

          Subscreber(rerender){   this._renderDomEliment=rerender  },

          dispatch(action){
        
          postReduser(this._State.Post, action)
          this._renderDomEliment()
          }
          
}


window.state=store._State





export default store
