import React from 'react' 
import Carousel from 'react-multi-carousel';
import NPM from "../assets/NPM.svg"
import JavaScript from "../assets/JavaScript.svg"
import Reactt from "../assets/Reactt.svg"
import Node from "../assets/Node.svg" 
import   Github   from  "../assets/Git.svg";
import MongoDB from "../assets/MongoDB.svg";
import Sass from "../assets/Sass.svg";
import Bootstrap from "../assets/Bootstrap.svg"
import Mysql from "../assets/MySQL.svg"
import 'react-multi-carousel/lib/styles.css';
import "../styles/Skills.css"


const Skills = () => {


    const responsive = {
        superLargeDesktop: { 
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    


  return (
    <section className="skill" id="habilidades">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2 className='text-info'>Habilidades</h2>
                    <p>Tengo conocimiento en las siguientes tecnologías <br></br> .</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={JavaScript} alt="Image" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={Reactt} alt="Image" />
                            <h5>React</h5>
                        </div>
                         
                        <div className="item">
                            <img src={Node} alt="Image" />
                            <h5>Nodejs</h5>
                        </div>
                        <div className="item">
                            <img src={Sass} alt="Image" />
                            <h5>Sass</h5>
                        </div>
                        <div className="item "  >
                            <img src={Bootstrap} alt="Image" />
                            <h5>Bootstrap</h5>
                        </div>
                         
                        <div className="item">
                            <img src={MongoDB} alt="Image" />
                            <h5>MongoDB</h5>
                        </div>
                        <div className="item">
                            <img src={Mysql} alt="Image" />
                            <h5>MySQL</h5>
                        </div>
                        <div className="item">
                            <img src={NPM} alt="Image" />
                            <h5>NPM</h5>
                        </div>
                        <div className="item">
                            <img src={Github} alt="Image" />
                            <h5>GitHub</h5>
                        </div>

                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    
</section>
  )
}

export default Skills