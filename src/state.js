const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UUPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SSEND_MESSAGE';


ss=()=>{
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

let store={
     _state:{
       profilePage:{
        postData: [
            { id :1, message: 'Hello' , liksCount: 15},
            {id:2, message: 'howdy hoo', liksCount: 22 }
         ],
        newPostText:'it-kama',
        },
       dialogPage:{
        dialogData:[
            {id:1, name:'Viktor'},
            {id:2, name:'Viola'},
            {id:3, name:'Viola'},
            {id:4, name:'Violla'},
            {id:5, name:'Violla'}
        ],
    
        
        messagData:[
            {id:1, sms:'Hi hi hi'},
            {id:2, sms:'He11111111111111llo'},
            {id:3, sms:'He11111111111111llo'},
            {id:4, sms:'He11111111111111llo'}
        ],

        newMessageBody:''
},
      sidebar:{}
},
        Kalk: {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,

        },
        

        // ____________________________________________________

    getState(){
        return this._state;
    },
     _callSubscriber  (){                   
         console.log('state changed')},
 
    subscriber (observer){
        this._callSubscriber=observer
    },

    dispatch(action){ 
    if (action.type===ADD_POST){
        let newPost={
            id:3,
            message: this._state.profilePage.newPostText,
            liksCount:22
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber (this._state);
    } else if(action.type===UPDATE_NEW_POST_TEXT){
        this._state.profilePage.newPostText=action.newText
        this._callSubscriber (this._state)
        
    } else if(action.type===UPDATE_NEW_MESSAGE_BODY){
        this._state.dialogPage.newMessageBody=action.body
        this._callSubscriber (this._state)
        
    }else if(action.type===SEND_MESSAGE){
        let body=this._state.dialogPage.newMessageBody;
        this._state.dialogPage.newMessageBody='';
        this._state.dialogPage.messagData.push({id:3, sms:body});
        this._callSubscriber (this._state)
    }
}

}
export const addPostActionCrator=()=> ({type:ADD_POST})
export const updateNewPostTextActionCrator=(text)=> ({
        type:UPDATE_NEW_POST_TEXT, newText:text 
   } )
   export const sendMessageCrator=()=> ({type:SEND_MESSAGE})
   export const updateNewMessageBodyCrator=(body)=> ({
    type:UPDATE_NEW_MESSAGE_BODY, body:body 
} )


 




export default store;
window.store=store


