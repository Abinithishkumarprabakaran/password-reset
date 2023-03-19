import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export function ForgotPassword() {
  return (
    <div className="container">
      <div className="loginpage">
        
        <Card className="card-container">

          <div className="headtext">
            <h4>Recovery</h4>
            <span>Enter OTP to recover Password</span>
          </div>

          <form>

            <div className="textbox">
              <TextField type="email" label="OTP" variant="outlined"/>
            </div>

            <div className="loginButton">
              <Button
                className="submit-button"
                variant="contained" 
                onClick={()=>console.log("Submit Button")}>
                  Submit
              </Button> 
              <span>can't get OTP ? <Link className="cp" href="/"> Resend </Link></span>
              {/* <span>Move to change Password<Link href='/changepassword'>Change Password</Link></span> */}
            </div>
     
          </form>
        </Card>

      </div>
    </div>
  );
}

