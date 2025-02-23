import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vedang Kanade </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently a Full Stack developer who loves developing Web
            Applications
            <br />
            I am currently pursuing my Masters in Computer Application from
            Mumbai University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"DREAM BIG WORK HARD!" </p>
          <footer className="blockquote-footer">Vedang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
