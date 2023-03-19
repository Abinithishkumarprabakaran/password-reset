import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export function LoginPage() {
  return (
    <div className="container">
      <div className="loginpage">
        
        <Card className="card-container">

          <div className="headtext">
            <h4>Hello Again!</h4>
            <span>Login</span>
          </div>

          <form>

            <div className="textbox">
              <TextField type="email" label="Username" variant="standard" />
              <TextField type="password" label="Password" variant="standard" />
            </div>

            <div className="loginButton">
              <Button 
                variant="contained" 
                onClick={()=>console.log("login Button")}>
                  Login
              </Button> 
              <Link className="fp" href="/confirmation"> <span>Forgot Password?</span> </Link>
              <span>Not a Member <Link href='/register'>Register</Link></span>
            </div>
     
          </form>

        </Card>


      </div>
    </div>
  );
}