import React from 'react'
import './SignUp.css'
import facebook from '../../asset/f_logo_RGB-Blue_1024.png'
import google from '../../asset/google.png'
import ExVector from '../../asset/Group 3.png'
import { Link } from 'react-router-dom'

function SignUp() {

  return (
    <>
    <div className="SignIn_page">

    <div className="container-fluid header">
        <p className='header_content '>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
      </div>

      <div className="main">


      {/* left................................. */}

        <div className="container-fluid signform main_container"> 
          
        <div className="container form_control2">

          <h1 className='signin_heading2'>Create Account</h1>



          <form className='sign_form2' action="#">
          <div className="inputholder">

              <input className='_input input_name' type="text" placeholder='First Name' />
              <input className='_input input_name' type="text" placeholder='Last Name' />
              <input className='_input'         type="text" placeholder='Email' />
              <input className='_input' type="text" placeholder='Password' />
              <input className='_input' type="text" placeholder='Confirm Password' />


          </div>
            
            <Link to='/internship_react_atg'>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
            </Link>

          </form>
            
            <div className="container other_option2">

            <button class="btn" >
            <img src={facebook} alt="" />
            Sign in with Facebook</button>

            <button class="btn" >
            <img src={google} alt="" />
            Sign in with Google</button>
              

            </div>

          </div>

        </div>
        <div className="container-fluid svg_vectors main_container">

          <div className="container form_control_right2">

            <p id="para_right2">Already have an account?
            <Link to="/internship_react_atg/signin"> Sign In
            </Link>
            </p>

            <img src={ExVector} alt="" />

            <p id='Copyright'>
            By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>

        </div>
      </div>
   

    </div>



    </>
  )
}

export default SignUp