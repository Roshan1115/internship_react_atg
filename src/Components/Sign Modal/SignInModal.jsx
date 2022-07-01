import React from 'react'
import Homepage from '../Homepage/Homepage'
import SignIn from '../SignIn Page/SignIn'
import st from './Sign.module.css'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'

const SignInModal = () => {
  return(
    <>
    <div className={`${st.wrapper}`}>
      <Homepage />
    </div>
    <div className={`${st.another}`}>
      <Link className={`${st.link}`}
       to="/internship_react_atg">
      <ClearIcon />
      </Link>


      <SignIn />
    </div>


    </>
  )
}

export default SignInModal