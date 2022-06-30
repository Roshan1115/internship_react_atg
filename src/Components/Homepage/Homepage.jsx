import React from 'react'
import homepage from './Homepage.module.css'
import atglogo from '../../asset/atglogo.png'
import Downarrow from '../../asset/down.png'
import heroImg from '../../asset/heroimg.jpeg'
// import SearchIcon from '../../asset/search-icon.png'


function Homepage() {
  return (
    <>
      {/* ........................................navbar.........................................  */}

    <div className={`${homepage.navbar} container-fluid`}>
      
      <img src={atglogo} alt="" />

      <input type="text" placeholder={`Search for your favorite groups in ATG`} />

      <div className={`${homepage.create_btn}`}>

      <p>
        Create Account. 
        <a href="#signup"> It's Free! </a>
      </p>

      <button>
        <img src={Downarrow} alt="" />
      </button>
      </div>
    </div>

    {/* ........................................end of navbar......................................................... */}




{/* ...................................hero................................................ */}

      <div className={`container-fluid  ${homepage.hero}`}>

        <img src={heroImg} alt="" />

        <div className={`${homepage.heading_holder}`}>
        <h1>Computer Engineering</h1>
        <p>
        142,765 Computer Engineers follow this
        </p>
        </div>
      </div>

{/* ......................................................end of hero,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  */}





{/* .......................................................main,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  */}

    <div className={`container ${homepage.main_container}`}>

      <div className={`${homepage.work_area}`}>
       

      <div className={`${homepage.navbar_2} `}>

      <ul>
        <li><a className={`${homepage.firstlink}`} href="#">All Post(32)</a></li>
        <li><a href="#">Article</a></li>
        <li><a href="#">Event</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Job</a></li>
      </ul>

      </div>




      </div>

      <div className={`${homepage.form_area}`}>


        <div className={`${homepage.navbar_2} ${homepage.btn_holder} `}>

        <button type="button" class={`btn btn-primary btn-sm ${homepage.btn_1}`}>Primary</button>

        <button type="button" class={`btn btn-light btn-sm ${homepage.btn_2}`}>Light</button>

        </div>



      </div>
    </div>

{/* .....................................................end of main,,,,,,,,,,,,,,,,,,,,,,,,,  */}


    


    </>
  )
}

export default Homepage