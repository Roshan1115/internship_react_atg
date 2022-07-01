import React from 'react'
import Homepage from '../Homepage/Homepage'
import SignUp from '../SignUp Page/SignUp'
import st from './Sign.module.css'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'

const SignUpModal = () => {
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
      
      <SignUp />
    </div>


    </>
  )
}

export default SignUpModal