import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export function Register() {
  return (
    <div className="container">
      <div className="loginpage">
        
        <Card className="card-container">

          <div className="headtext">
            <h4>Hello</h4>
            <span>Sign Up</span>
          </div>

          <form>

            <div className="textbox">
              <TextField type="email" label="Email" variant="standard"/>
              <TextField type="password" label="Password" variant="standard"/>
              <TextField type="password" label="Confirm Password"variant="standard"/>
            </div>

            <div className="loginButton">
              <Button
                variant="contained" 
                onClick={()=>console.log("Signup Button")}>
                  Sign up
              </Button> 
              <span>Not a Member <Link href='/'>Login</Link></span>
            </div>
     
          </form>
        </Card>

      </div>
    </div>
  );
}
