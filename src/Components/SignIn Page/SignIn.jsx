import React from 'react'
import './SignIn.css'
import facebook from '../../asset/f_logo_RGB-Blue_1024.png'
import google from '../../asset/google.png'
import ExVector from '../../asset/Group 3.png'


function SignIn() {

  return (
    <>
    <div className="SignIn_page">

    <div className="container-fluid header">
        <p className='header_content '>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
      </div>

      <div className="main">


      {/* left................................. */}

        <div className="container-fluid signform main_container"> 
          
        <div className="container form_control">

          <h1 className='signin_heading'>Sign In</h1>



          <form className='sign_form' action="#">
          <div className="inputholder">

          <input className='_input'         type="text" placeholder='Email' />
              <input className='_input' type="text" placeholder='Password' />

          </div>
            

            <input class="btn btn-primary" type="submit" value="Submit"></input>

          </form>
            
            <div className="container other_option">

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

          <div className="container form_control_right">

            <p>Don’t have an account yet? 
            <a href="#"> Create new for free!
            </a>
            </p>

            <img src={ExVector} alt="" />

          </div>

        </div>
      </div>
   

    </div>



    </>
  )
}

export default SignIn