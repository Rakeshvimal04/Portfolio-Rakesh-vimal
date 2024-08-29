import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Digital Visting Card"
              description="Developed digital visiting card websites for freelancers, using various frameworks and programming technologies like HTML5, CSS3, Javascript, Angular ,Node.js , Express, API and MySQL  .Developing and maintaining web application using frameworks"
              ghLink="https://github.com/Rakeshvimal04/angularproject/tree/main/ample-angular-16-dashboard-free"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="eraktkosh"
              description="Indian eRaktkosh project,this Blood Bank Management System efficiently manages and tracks blood donations. it allows seamless donor registration, real-time inventory monitoring and streamlined communication between donors and healthcare providers."
              ghLink="https://github.com/Rakeshvimal04/eraktkosh-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
