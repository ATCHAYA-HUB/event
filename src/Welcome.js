import React from 'react'
import Button from '@mui/material/Button';
import './Welcome.css'
export default function 
Welcome() {
  return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <body>
        <header class="welheader">
    </header>
    <div className='wel2'> <div className='wel1'></div></div>
        <div class="welcontainer1">
         <div class="welitem">
             <h1 class="wellogo">i<span style={{color:"rgb(203, 26, 26)"}}>D</span>o <span style={{color:"rgb(203, 26, 26)"}}>E</span>vent<span style={{color:"rgb(203, 26, 26)"}}>Z</span></h1>
             <div class="weltext-welitem">
              <p><div className="welbut1"><Button color="secondary" variant="contained">Secondary</Button></div>
     <div  className="welbut2" ><Button variant="contained" color="secondary">
        Success
      </Button></div> </p>
              
             </div>
         </div>
         </div>
        </body>
        </div>
  )
}
