import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa officia doloremque perferendis recusandae impedit, quos quis modi quo officiis est, cumque quaerat? Consequuntur distinctio perspiciatis earum expedita blanditiis numquam veritatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate ad quo sequi dolores praesentium quos hic doloremque quod accusamus. Doloremque dignissimos itaque quod eveniet?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptates quibusdam laborum dolorum laudantium veniam, assumenda id eveniet nesciunt tenetur laboriosam. Dolorum rem expedita quibusdam?</p>
      </div>
    </div>
  )
}

export default About
