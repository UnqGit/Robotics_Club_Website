import React, { useState, useMemo } from 'react';
import contentData from '../data/contentData';

import calendar from "../assets/icons/events.svg?react";
import time from "../assets/icons/industryCircle.svg?react";
import members from "../assets/icons/about.svg?react";
import venue from "../assets/icons/building.svg?react";

const Event = () => {
  const [filter, setFilter] = useState("All");

  /* Filter criteria for categorization */
  const filterOptions = ["All", "Workshop", "Competition", "Guest Lecture", "Social Event"];

  /* Memoize filtered results to optimize performance */
  const filteredEvents = useMemo(() => {
    return contentData.filter(item => 
      item.type === "events" && (filter === "All" || item.filter === filter)
    );
  }, [filter]);

  return (
    <div className="eve">
      <div className="eve--block">
        <h1>Events & Activities</h1>
        <p>Join our workshops, competitions and guest lectures to expand your knowledge and network</p>

        <div className="filter--events">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={filter === option ? "clicked" : ""}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="eve--mapping">
          <div className="eve--head">
            <h2 className="small--eve">
              Upcoming Events: <span className="choosen--event">{filter}</span>
            </h2>
            <p className="event-p">Register now to secure your spot in these exciting events</p>
          </div>

          <div className="events--eve--section">
            {filteredEvents.length === 0 ? (
              <div className="no--events">
                <h3>No events available</h3>
                <p>There are currently no events under "{filter}"</p>
              </div>
            ) : (
              filteredEvents.map((item) => (
                <div className="filteringEvents" key={item.id}>
                  <img src={item.Image} alt={item.title} />
                  
                  <div className="events--descript">
                    <div className="top--eve">
                      <div className="filter--eve--icon">
                        <p>{item.filter}</p>
                      </div>
                      <h3>{item.title}</h3>
                      <p className="eve--descript">{item.description}</p>
                    </div>

                    <div className="bottom--eve">
                      <div className="option">
                        <div className="option--icon invert calendar">
                          <img src={calendar} alt="Calendar icon" />
                        </div>
                        <div className="option--desc">
                          <span>Date</span>
                          <p className="event--value">{item.date}</p>
                        </div>
                      </div>

                      <div className="option">
                        <div className="option--icon invert time">
                          <img src={time} alt="Time icon" />
                        </div>
                        <div className="option--desc">
                          <span>Time</span>
                          <p className="event--value">{item.time}</p>
                        </div>
                      </div>

                      <div className="option">
                        <div className="option--icon invert venue">
                          <img src={venue} alt="Venue icon" />
                        </div>
                        <div className="option--desc">
                          <span>Venue</span>
                          <p className="event--value">{item.venue}</p>
                        </div>
                      </div>

                      <div className="option">
                        <div className="option--icon invert expected">
                          <img src={members} alt="Participants icon" />
                        </div>
                        <div className="option--desc">
                          <span>Expected</span>
                          <p className="event--value">{item.participants}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;