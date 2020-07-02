import React from 'react';
import load from'../../photo/Spinner.svg'
const Preloader=()=>{
    return(
        <div style={{height:'100vh', textAlign:'center'}}>
            <img style={{marginTop:'200px ' }} src={load}/>
        </div>
    )
}
export default Preloader