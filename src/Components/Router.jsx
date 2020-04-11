import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './Home';
import Registration from './Login_Regisr/Registration';
import ForfetPasswordSleep1 from './ForgetPasword/forgetPasSleep1';
import UpdateLog from './Update/UpdateLog';
import Login2 from './Login_Regisr/Login';
import Verufy from './Update/Verufy';
import UpdateEmail from './Update/updateEmail';
import UpdatePassword from './Update/updatePassword';






const Routes=()=> 

(  
  <BrowserRouter>   
  
  <Switch> 

<Route  exact path="/"  render={()=><Home/>} />
<Route path="/login"  component={Login2} />
<Route path="/registr"  render={()=><Registration/>} />
<Route path="/forgetPasword" render={()=><ForfetPasswordSleep1/>} />
<Route path="/update" render={()=><UpdateLog />} />
<Route path="/updateEm" render={()=><UpdateEmail />} />
<Route path="/updatePas" render={()=><UpdatePassword />} />
<Route path="/verufy" render={()=><Verufy />} />

  </Switch>
  </BrowserRouter> 
)





export default Routes
