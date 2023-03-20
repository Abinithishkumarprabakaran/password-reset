import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export function Confirmation() {
  return (
    <div className="container">
      <div className="loginpage">
        
        <Card className="card-container">

          <div className="headtext">
            <h4>Confirm your Email</h4>
          </div>

          <form>

            <div className="textbox">
              <TextField type="email" label="Enter your email" variant="outlined"/>
            </div>

            <div className="loginButton">
              <Button
                className="submit-button"
                variant="contained" 
                onClick={()=>console.log("Confirm Button")}>
                  Confirm
              </Button>

              <Link className="fp" href="/forgotpassword"> <span>Confirmed</span> </Link>
            </div>
     
          </form>
        </Card>

      </div>
    </div>
  );
}


