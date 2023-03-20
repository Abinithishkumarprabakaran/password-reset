import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export function ChangePassword() {
  return (
    <div className="container">
      <div className="loginpage">
        
        <Card className="card-container">

          <div className="headtext">
            <h4>Change Password</h4>
          </div>

          <form>

            <div className="textbox">
              <TextField type="password" label="Password" variant="standard"/>
              <TextField type="password" label="Confirm Password" variant="standard"/>
            </div>

            <div className="loginButton">
              <Button
                className="submit-button"
                variant="contained" 
                onClick={()=>console.log("Confirm Button")}>
                  Confirm
              </Button>

              <Link className="fp" href="/"> <span>Confirmed</span> </Link>
            </div>
     
          </form>
        </Card>

      </div>
    </div>
  );
}


