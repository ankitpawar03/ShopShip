import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from "axios";
import {useNavigate, useLocation, Navigate} from "react-router-dom"
import { useAuth } from "../../context/auth";
import "../../styles/AuthStyles.css";

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [auth, setAuth] = useAuth()
  const location = useLocation()

  const navigate = useNavigate()

   // FORM FUNCTION
   const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post('/api/v1/auth/login', {email,password});
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || "/");
      }
      else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')          
    }
};

  return (
    <Layout title="Register Ecommerce - App">
      <div className="form-container" style={{ minHeight: "90vh" }} >
        <form onSubmit={handleSubmit}>
        <h1 className="text-center">LOGIN</h1>
          
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Password"
              required
            />
          </div>
        
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <hr/>
          <div className="mb-3" >
          <button style={{backgroundColor: "darkred"}} type="button" className="btn btn-primary" onClick={() => {navigate("/forgot-password")}}>
            Forgot Password?
          </button>
          </div>

        </form>
      </div>
    </Layout>
  )
}

export default Login