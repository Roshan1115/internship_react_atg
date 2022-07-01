import React from 'react'
import card from './Card.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Card(props) {

  const {imageUrl, category, heading, subtitle, authorName, authorImage, views, applyButton, applyButtonColor } = props.Data;

  return (
    <div className={`${card.card}`}>

    {
      (imageUrl) ?
      <img className={`${card.card_img}`} src={imageUrl} alt="" />
      :
      null
    }
      
      
      <div className={`${card.info_holder}`}>

        <div className={`${card.category}`}>
        {category}
        </div>

        <div className={`${card.heading_holder}`}>
          <h2>
          {heading}
          </h2>
          <button
          style={{backgroundColor: 'white', border: 'none'}}
          >
          <MoreHorizIcon />
          </button>
        </div>

        <p
        className={`${card.subtitle}`}
        >
        {subtitle}
        </p>


    {
      (applyButton != "") ?
        <button
          style={{color: applyButtonColor}}
          className={`${card.apply_btn}`}
          >applyButton</button>
          :
          null
      
    }

       
        <div className={`${card.last}`}>
          <div className={`${card.author}`}>
            <img src={authorImage} alt="Author Image" />
            <p>
            {authorName}
            </p>
          </div>

          <div className={`${card.view}`}>
            <p>
              <RemoveRedEyeIcon /> {views}
            </p>
              <button
              style={{border:'none', padding:'0.2rem'}}
              >
              <ShareIcon />
              </button>
          </div>

        </div>



      </div>

    </div>
  )
}

export default Card