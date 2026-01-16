import React from 'react';
import contentData from '../data/contentData';
import DateIcon from "../assets/icons/events.svg?react";

const Achievements = () => {
  // Render the achievements overview and detailed list
  return (
    <div className="achievement--section">
      <div className="achieve--am">
        <h1>Our Achievements</h1>
        <p>Celebrating excellence, innovation, and dedication in robotics</p>

        <div className="achieve--data">
          {contentData
            .filter((item) => item.type === "achieve")
            .map((item) => (
              <div className="achieve--area" key={item.id}>
                <div className="achieve--icons">
                  <img src={item.Image} alt="Achievement icon" />
                </div>
                <h3>{item.number}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>

        <div className="achievement--content">
          {contentData
            .filter((item) => item.type === "achievement")
            .map((item) => (
              <div className="content--div card" key={item.id}>
                <div className="imgturn">
                  <img src={item.Image} alt="Achievement visual" />
                  <span className="got--achieve">{item.got}</span>
                  <span className="about--achieve">{item.about}</span>
                </div>
                <div className="content--data">
                  <div className="achieve--date">
                    <DateIcon />
                    <p>{item.date}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="team--name">{item.teamName}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;