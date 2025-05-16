import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rakesh Vimal</span>
            from <span className="purple">Bangalore, India.</span>
            <br />
            I have completed Bachelor of Computer Applications at SRMVCAS.
            <br />
            I am a dedicated developer with expertise in 
            <span className="purple"> React, Laravel, Python,</span> and 
            <span className="purple"> Docker</span>. I also have experience with 
            <span className="purple"> GitHub</span> for version control and 
            <span className="purple"> SQL</span> for database management.
            <br />
            <br />
            My key areas of focus and expertise include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building dynamic web applications using React and Laravel
            </li>
            <li className="about-activity">
              <ImPointRight /> Managing containerized deployments using Docker
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing efficient backend logic and APIs in Python
            </li>
            <li className="about-activity">
              <ImPointRight /> Database design and optimization with SQL
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it’s bad."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
