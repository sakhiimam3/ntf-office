import React, { useState, useEffect } from 'react'
import {AiOutlineUser,AiOutlineSend}  from "react-icons/ai"
import {RiLockPasswordFill}  from "react-icons/ri"
import { useNavigate } from 'react-router'
import "../styles/loginform .css"

const Login = () => {
  const Navigate=useNavigate()
     //  login form states 
  const [userLogin, setUserLogin] = useState({ email: "", password: "" })
  const [loginRecord, setloginRecord] = useState([])


  
  // LOGIN Form functionality start //

  // handle login event of the form 
  const handleLogin = (e) => {
    const value = e.target.value;
    setUserLogin({
      ...userLogin,
      [e.target.name]: value
    });
  }


  // postrequest functionality  of login up form
  // const loginRequest= async ()=>{
  //       try {
  //         const response= await axios.post("", submit )
  //       } catch (error) {
  //             console.log(error)
  // } //       }
 


  // call post request function here
  // useEffect(() => {
  //   loginRequest()
  // }, [])

  console.log(loginRecord)

  const submitLoginForm = (e) => {
    e.preventDefault()
    const newLoginUser = { ...userLogin }
    setloginRecord([...loginRecord, newLoginUser])



    setUserLogin({ email: '', password: '' })

  }

  return (
          <>  
  


<div class="login_container">
	<div class="login_screen">
		<div class="screen__content">
      <div className='logo' onClick={()=>Navigate("/")}>
          <img className='img-fluid' src="https://thumbs.dreamstime.com/b/nft-non-fungible-token-logo-header-banner-vector-illustration-digital-art-concept-216051358.jpg" alt="" />
      </div>
			<form  onSubmit={submitLoginForm} class="login">
				<div class="login__field">
			
          <AiOutlineUser />
					<input type="text" value={userLogin.email} onChange={handleLogin}  name="email"  class="login__input" placeholder=" Email" />
				</div>
				<div class="login__field">
				<RiLockPasswordFill />
					<input type="password" value={userLogin.password} name="password" onChange={handleLogin} class="login__input" placeholder="Password" />
				</div>
				<button type='submit' class="button login__submit">
					<span class="button__text">Log In Now</span>
				<AiOutlineSend />
				</button>				
			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape1"></span>
			<span class="screen__background__shape screen__background__shape2"></span>		
		
		</div>		
	</div>
</div>  
</>  
  )
}

export default Login