import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adidas from "../../Assets/Projects/adidas.png";
import ecom from "../../Assets/Projects/ecom.jpg";
import socmed from "../../Assets/Projects/Socmed.png";
import pokiAPI from "../../Assets/Projects/pokiAPI.png";

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
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce Web Application"
              description="Online Store for Clothes which can be bought online and also paid through online mode."
              ghLink="https://github.com/VedangKanade20/E-Com-WebApplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adidas}
              isBlog={false}
              title="Adidas homePage"
              description="My personal Clone and designing of Adidas website using HTML & CSS only!"
              ghLink="https://github.com/VedangKanade20/Brushing-up-html-css"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socmed}
              isBlog={false}
              title="Social Media Web Application"
              description="An online social media platform where you can upload images write posts and connect with friends."
              ghLink="https://github.com/VedangKanade20/Social-Media-Web-Application-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokiAPI}
              isBlog={false}
              title="POKEMON STORE"
              description="Used JavaScript And made a normal Frontend store for various Pokemon."
              ghLink="https://github.com/VedangKanade20/Pokemon-Store"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
