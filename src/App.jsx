import './App.css'
import { ChangePassword } from './ChangePassword'
import { ForgotPassword } from './ForgotPassword'
import { LoginPage } from './LoginPage'
import { Profile } from './Profile'
import { Register } from './Register'
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { PageNotFound } from './PageNotFound';
import { Confirmation } from './Confirmation';

function App() {

  const bgStyles = {
    borderRadius: "0px",
    backgroundColor: "rgb(141, 45, 232)",
    minHeight: "100vh",
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/forgotpassword" element={ <ForgotPassword /> } />
        <Route path="/confirmation" element={ <Confirmation /> } />
        <Route path="/changepassword/:id" element={ 
          <ProtectedRoutePasswordChange>
            <ChangePassword /> 
          </ProtectedRoutePasswordChange>} />
        <Route path="/profile" element={ 
            <ProtectedRouteProfile>
              <Profile />
            </ProtectedRouteProfile> }/>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      
    </div>
  )
}

function ProtectedRouteProfile({ children }) {
  const token = localStorage.getItem('token');
  return (
    token ?
    <section>
      {children}
    </section> :
    <Navigate replace to="/"/>
  )
}

function ProtectedRoutePasswordChange({ children }) {
  const OTP = localStorage.getItem('OTP');
  return (
    OTP ?
    <section>
      {children}
    </section> :
    <Navigate replace to="/"/>
  )
}

export default App


