import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import   ProjectCard from "./ProjectCard";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/Projects.css"
const Projects = () => {

    const projects = [
        {
          title: "Ecommerce para tienda de ropa",
          description: "Diseño y desarrollo",
          imgUrl: projImg1,
        },
        {
          title: "Sistema para Gestión de Biblioteca",
          description: "Diseño y desarrollo",
          imgUrl: projImg2,
        },
        {
          title: "Chatbot con API de OpenAI",
          description: "Diseño y desarrollo",
          imgUrl: projImg3,
        },
        {
          title: "Sistema de Gestión de Bienes ",
          description: "Diseño y desarrollo",
          imgUrl: projImg1,
        },
        {
          title: "Clone de Facebook",
          description: "Diseño y desarrollo",
          imgUrl: projImg2,
        },
        {
          title: "Clone de ChatGPT",
          description: "Diseño y desarrollo",
          imgUrl: projImg3,
        },
      ];
    

  return (
    <section className="project" id="proyectos">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Proyectos</h2>
              <p>Estos son los proyectos desarrollados como freelancer y estudiante de Ingeniería Informática.  </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
               
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
  )
}

export default Projects