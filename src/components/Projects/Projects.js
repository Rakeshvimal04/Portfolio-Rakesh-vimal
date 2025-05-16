import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import goholiday from "../../Assets/Projects/goholiday.png";
import royaltranscript from "../../Assets/Projects/royaltranscript.png";
import eratkosh from "../../Assets/Projects/eratkosh.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goholiday}
              isBlog={false}
              title="GOHOLIDAY 360"
              description="Developed a responsive and dynamic frontend using blade, ensuring seamless user interaction and navigation across various devices.
                           Engineered a robust backend with Laravel, facilitating efficient data management and secure processing of user bookings and inquiries.
                           Integrated RESTful APIs to enable real-time communication between the frontend and backend systems, improving data accuracy and system reliability."
              ghLink="https://www.goholiday360.com/"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={royaltranscript}
              isBlog={false}
              title="ROYAL TRANSCRIPT"
              description="RoyalTranscripts.com an online platform designed to streamline the process of obtaining academic transcripts from Indian universities.
              The application offers a user-friendly interface for students to submit transcript requests, track application statuses, and receive updates, therebysimplifying the traditionally complex process of transcript acquisition.
              Developed a responsive and intuitive frontend using React.js, enhancing user experience across devices."
              ghLink="https://royaltranscripts.com/"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eratkosh}
              isBlog={false}
              title="E-RAKTKOSH-CLONE"
              description="The Eratkosh Clone is a web-based application designed to replicate the core functionalities and user experience of the Eratkosh platform. Built using the React framework, this project focuses on delivering a sleek, responsive, and interactive interface while ensuring optimal performance. The clone aims to provide a scalable and modular design that can be extended to meet additional requirements."
              ghLink="https://github.com/Rakeshvimal04/eraktkosh-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
