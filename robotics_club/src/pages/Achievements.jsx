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
                  <div className="achieve--icons">
                    <img src={item.Image}/>
                  </div>
                  <h3>{item.number}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>

            <div className="achievement--content">
              {
                contentData
                .filter(item => item.type === "achievement")
                .map(item => (
                  <div className="content--div">
                    <div className="imgturn">
                      <img src={item.Image} alt="logo" />
                      <span className='got--achieve'>{item.got}</span>
                      <span className='about--achieve'>{item.about}</span>
                    </div>
                  </div>
                ))
              }
            </div>

        </div>
    </div>
  )
}

export default Achievements;