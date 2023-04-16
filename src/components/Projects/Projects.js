import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import assess from "../../Assets/Projects/Assesment.jpg";
import travel from "../../Assets/Projects/traveelo.jpg";
import sentiment from "../../Assets/Projects/download.jpg";

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
              imgPath={travel}
              isBlog={false}
              title="Travello"
              description="Our Project Implements Online Booking system and Hospitality
              Tools - Python full stack, MySQL."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assess}
              isBlog={false}
              title="Student Assessment Management System"
              description="This Project is based on student performance
              Tracking where will Assign a modules and trainers
              based on their performance"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis Model"
              description="This Project used to extract subjective information from text,
              such as opinions, attitudes, and emotions. It is a subfield of
              natural language processing (NLP) that deals with analyzing
              and understanding human emotions, thoughts, and opinions"
                      
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
