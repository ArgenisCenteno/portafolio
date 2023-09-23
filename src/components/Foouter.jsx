import React from 'react'
import { Container, Row, Col } from "react-bootstrap"; 
import  "../styles/Footer.css"

const Foouter = () => {
  return (
    <footer className="footer text-center  ">
      <Container>
        <p>Desarrollado por Argenis Centeno</p> <br />
        <p>Todos los derechos reservados</p> <br /> 
      </Container>
    </footer>
  )
}

export default Foouter