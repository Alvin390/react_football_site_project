import React from "react";

const About = () => (
  <div className="about-page-wrapper">
    <div className="about-page-container">
    <div className="about-header-section">
      <h2 className="about-title">About Arsenal FC</h2>
      <p className="about-intro">
        Arsenal Football Club is a professional football club based in Islington, London, England. Founded in 1886, Arsenal is one of the most successful clubs in English football history, renowned for its tradition, style, and passionate fanbase.
      </p>
    </div>
    <div className="about-content-wrapper">
      <div className="about-section about-history-section">
        <h3 className="section-title">History</h3>
        <p className="section-text">
          Arsenal FC was founded as Dial Square in 1886 by munitions workers at the Royal Arsenal in Woolwich. The club moved to Highbury in North London in 1913 and has since become a staple of English football. Arsenal is known for its innovative managers, legendary players, and a commitment to attractive, attacking football.
        </p>
      </div>
      <div className="about-section about-achievements-section">
        <h3 className="section-title">Achievements</h3>
        <ul className="achievements-list">
          <li>13 English League titles</li>
          <li>14 FA Cups (record)</li>
          <li>2 League Cups</li>
          <li>16 FA Community Shields</li>
          <li>UEFA Cup Winners' Cup (1994)</li>
          <li>"The Invincibles" – unbeaten Premier League season (2003–04)</li>
        </ul>
      </div>
      <div className="about-section about-stadium-section">
        <h3 className="section-title">Stadium</h3>
        <p className="section-text">
          Arsenal's home since 2006 is the Emirates Stadium, a modern arena in North London with a capacity of over 60,000. Previously, Arsenal played at the historic Highbury Stadium.
        </p>
      </div>
      <div className="about-section about-legends-section">
        <h3 className="section-title">Club Legends</h3>
        <ul className="legends-list">
          <li>Thierry Henry</li>
          <li>Dennis Bergkamp</li>
          <li>Tony Adams</li>
          <li>Patrick Vieira</li>
          <li>Ian Wright</li>
          <li>David Seaman</li>
          <li>Robert Pirès</li>
        </ul>
      </div>
      <div className="about-section about-culture-section">
        <h3 className="section-title">Fans & Culture</h3>
        <p className="section-text">
          Arsenal fans, known as "Gooners", are famous for their loyalty and passion worldwide. The club is celebrated for its attacking philosophy, youth development, and community involvement.
        </p>
      </div>
    </div>
        </div>
    </div>
);


export default About;