import React from 'react'
import homepage from './Homepage.module.css'
import Card from '../Card/Card'
import CardData from '../Card/Card Data/CardData'
import atglogo from '../../asset/atglogo.png'
import Downarrow from '../../asset/down.png'
import heroImg from '../../asset/heroimg.jpeg'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';


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
        <Link
         to="/internship_react_atg/signup"> It's Free! </Link>
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


        {/* ............CARD........ */}
        {
          CardData.map((data) => (
            <Card Data={data} />        
          ))
        }
       


      </div>

      <div className={`${homepage.form_area}`}>

        <div className={`${homepage.navbar_2} ${homepage.btn_holder} `}>
        <div className={`${homepage.btncomp}`}>

          <button type="button" class={`btn btn-primary btn-sm ${homepage.btn_1}`}>Write a Post</button>

          <button type="button" class={`btn btn-light btn-sm ${homepage.btn_2}`}>Join Group</button>

        </div>

        </div>

        <div className={`${homepage.location}`}>

    
        <div className={`${homepage.input_control}`}>

          <input type="text" value="Noida, India" />

          <EditIcon />

        </div>

          <p>
          Your location will help us serve better and extend a personalised experience.
          </p>

        </div>

      </div>
    </div>

{/* .....................................................end of main,,,,,,,,,,,,,,,,,,,,,,,,,  */}


    


    </>
  )
}

export default Homepage