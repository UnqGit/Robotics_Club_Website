import React from 'react'
import contentData from '../data/contentData'

const Achievements = () => {
  {/* Achievements section of the website */}
  return (
    <div className='achievement--section'>
        <div className="achieve--am">
          <h1>Our Achievements</h1>
          <p>Celebrating excellence, innovation, and dedication in robotics</p>

          <div className="achieve--data">
            {
              contentData
              .filter(item => item.type === "achieve")
              .map(item => (
                <div className="achieve--area" id={item.id}>
                  <img src={item.Image}/>
                  <h2>{item.number}</h2>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Achievements;