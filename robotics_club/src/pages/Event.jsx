import React from 'react'
import contentData from '../data/contentData';

const Event = () => {

  const [filter, setFilter] = React.useState("All");
  const filteredEves = contentData
    .filter(item => item.type === "events" && (filter === "All" || item.filter === filter))

  {/* Events section of the website */}
  return (
    <div className='eve'>
      <div className="eve--block">
        <h1>Events & Activities</h1>
        <p>Join our workshops, competitions and guest lectures to expand your knowledge and network</p>

        <div className="filter--events">
          <button onClick={() => setFilter("All")} className={filter === "All" ? "clicked" : ""}>All</button>
          <button onClick={() => setFilter("Workshop")} className={filter === "Workshop" ? "clicked" : ""}>Workshop</button>
          <button onClick={() => setFilter("Competition")} className={filter === "Competition" ? "clicked" : ""}>Competition</button>
          <button onClick={() => setFilter("Guest Lecture")} className={filter === "Guest Lecture" ? "clicked" : ""}>Guest Lecture</button>
          <button onClick={() => setFilter("Social Event")} className={filter === "Social Event" ? "clicked" : ""}>Social Event</button>
        </div>

        <div className="eve--mapping">
          <div className="eve--head">
            <h2 className='small--eve'>Upcoming Events :<span className='choosen--event'> {filter} </span></h2>
            <p className='event-p'>Register now to secure your spot in these exciting events</p>
          </div>
          <div className="events--eve--section">
            {filteredEves.length === 0 ? (
              <div className="no--events">
                <h3>No events available</h3>
                <p>There are currently no events under "{filter}"</p>
              </div>
            ) : (
              filteredEves.map(item => (
                <div className="filteringEvents" key={item.id}>
                  <img src={item.Image} alt="img" />
                  <div className="events--descript">
                    <div className="top--eve">
                      <div className="filter--eve--icon">
                        <p>{item.filter}</p>
                      </div>
                      <h3>{item.title}</h3>
                      <p className='eve--descript'>{item.description}</p>
                    </div>
                    <div className="bottom--eve">
                      <div className="option">
                        <div className="option--icon">
                          <img src={item.Icon} alt="icon" />
                        </div>
                        <div className="option--desc">
                          <span>Date </span>
                          <p className='event--value'>{item.date}</p>
                        </div>
                      </div>
                      <div className="option">
                        <div className="option--icon">
                          <img src={item.Icon} alt="icon" />
                        </div>
                        <div className="option--desc">
                          <span>Time </span>
                          <p className='event--value'>{item.time}</p>
                        </div>
                      </div>
                      <div className="option">
                        <div className="option--icon">
                          <img src={item.Icon} alt="icon" />
                        </div>
                        <div className="option--desc">
                          <span>Venue </span>
                          <p className='event--value'>{item.venue}</p>
                        </div>
                      </div>
                      <div className="option">
                        <div className="option--icon">
                          <img src={item.Icon} alt="icon" />
                        </div>
                        <div className="option--desc">
                          <span>Expected </span>
                          <p className='event--value'>{item.participants}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event