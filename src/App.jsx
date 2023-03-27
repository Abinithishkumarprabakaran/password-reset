import './App.css'
import { ChangePassword } from './ChangePassword'
import { ForgotPassword } from './ForgotPassword'
import { LoginPage } from './LoginPage'
import { Profile } from './Profile'
import { Register } from './Register'
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { PageNotFound } from './PageNotFound'
import { Confirmation } from './Confirmation'

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
        <Route path="/changepassword" element={ <ChangePassword /> } />
        <Route path="/profile" element={ 
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute> }/>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      
    </div>
  )
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return (
    token ?
    <section>
      {children}
    </section> :
    <Navigate replace to="/"/>
  )
}

export default App


