import React from 'react';
import  '../../express.css'
import SimpleMap from '../../map';
import { WithAuthRedirect } from '../../RedirectHock';






const Objectc=(props)=>{

  return(<>
<div className='container mw-100  h-100' >
  <div className="row ">
    <div className="col-sm-4 border-right  p-0">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item w-50 ">
    <a className="nav-link  active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li className="nav-item w-50 ">
    <a className="nav-link "  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Chi-gi-1</div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Chi-gi-2</div>
</div>
      
    </div>
    <div className="col-sm-8   p-0">
    
      <SimpleMap/>
  
    </div>
  </div>
  
</div>
</>  )
}
let sw=WithAuthRedirect(Objectc)
export default sw
