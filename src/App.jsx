import React from 'react'
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import SignUpModal from './Components/Sign Modal/SignUpModal'
import SignInModal from './Components/Sign Modal/SignInModal'

function App() {
  return (
    <>
  <BrowserRouter>

    <Routes>
      <Route exact path="/internship_react_atg" element={<Homepage />} />
      <Route exact path="/internship_react_atg/signup" element={<SignUpModal />} />
      <Route exact path="/internship_react_atg/signin" element={<SignInModal />} />
    </Routes>

      {/* <SignIn />
      <SignUp /> */}

    </BrowserRouter>



    </>
  )
}

export default App