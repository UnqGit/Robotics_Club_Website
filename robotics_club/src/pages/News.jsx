import React from 'react'
import '../appStyle.css'
import contentData from '../data/contentData'
import calender from '../assets/icons/events.svg?react'

const News = () => {
  return (
    <div className='news'>
      <div className="news--section">
        <h1>Latest News</h1>
        <p>Stay updated with the latest achievements, events, and innovations from our robotics club</p>
        <div className="news--search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
          <input type="text" placeholder='Search news....' className='news--input' />
        </div>
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
                    <img src={calender} alt="icon" />
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
        <h2>PAST NEWS</h2>
        <p>Stay updated with the past acheivement.events.ande innovations from our robotics club</p>

        


      </div>
    </div>
  )
}

export default News