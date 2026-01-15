import React from 'react'
import contentData from '../data/contentData'

const Achievements = () => {
  {/* Achievements section of the website */}
  return (
    <div className='achievement--section'>
        <div className="achieve--am">
          <h1>Oue Achievements</h1>
          <p>Celebrating excellence, innovation, and dedication in robotics</p>

          <div className="achieve--data">
            {
              contentData
              .filter(item => item.type === "achieve")
              .map(item => (
                <div className="achieve--area">
                  <img src='./src/assests/icon/'/>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Achievements;