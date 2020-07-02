import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registr_ss from './Components/login/registration'
import Login_ss from './Components/login/login'
import './App.css';
import { connect } from 'react-redux';
import Preloader from './Components/preloader/Preloader';
import  Prof  from './Components/profile/Prof';
import Header from './Components/header/Header';
import Object from './Components/pages/Object';
import Geo from './Components/pages/Geo';
import Treck from './Components/pages/Treck';
import Statistic from './Components/pages/Statistic';

 const App=(props)=>{

  

    return(<>
{props.isFeatching? <Preloader/>:

    <div className='container mh-100 mw-100 p-0'>
          <div><Header/></div>
          <Route path='/object' render={()=><Object/>}/>
          <Route path='/treck'  component={Treck}/>
          <Route path='/statistic'  component={Statistic}/>
          <Route path='/geo'  component={Geo}/>
          <Route path='/prof' component={Prof}/>
          <Route path='/reg'  component={Registr_ss}/>
          <Route path='/log'  component={Login_ss} />


</div>}

    </>


  // <>{props.isFeatching? <Preloader/>:
  // <>
      
     
 
  
        
  //    <div class="app_wrapper_mod">
  //   <Route path='/reg'  component={Registr_ss}/>
  //   <Route path='/log'  component={Login_ss} />
  //   <Route path='/' component={Profile_ss}/>
  //   </div> </>
  // }



    )
}
const toPropsStatr=(state)=>{
  return{
    isFeatching:state.Lang.isFeatching
  }
}


export default connect(toPropsStatr) (App)



// const [state, setState] = useReducer((prevState, newState) => {
//     return {...prevState, ...newState}},
//     {
//     langName:props.lang 
// });

// let[langName, setLangName]=useState(props.lang)

// useEffect(()=>{
//     setState({langName:props.lang})
//     Lang()
//    },[props.lang])  