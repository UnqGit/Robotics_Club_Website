import React from 'react'
import '../appStyle.css'
import contentData from '../data/contentData'
import calendar from '../assets/icons/events.svg?react'

const News = () => {
  {/* News section of the website */}
  return (
    <div className='news'>
      <div className="news--section">
        <h1>Latest News</h1>
        <p>Stay updated with the latest achievements, events, and innovations from our robotics club</p>
        <div className="news--content">
          {
            contentData
            .filter(item => item.type === "latestnews")
            .map(item => (
              <div className="news--card" key={item.id}>
                <div className="img--news">
                  <img src={item.Image} alt="img" />
                  <p>{item.about}</p>
                </div>
                <div className="data--time">
                  <div className="news--icon">
                    <img src={calendar} alt="icon" />
                  </div>
                  <span>{item.date}</span>
                </div>
                <div className="news--desc">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>

              </div>
            ))
          }
        </div>
        
      </div>
    </div>
  )
}

export default News