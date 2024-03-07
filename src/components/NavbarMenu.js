import {Container, Navbar} from "react-bootstrap"

export default function NavbarMenu() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href= "#!">
                Dinamic <b>form</b>
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse className="justify-content-end">

              
                <Navbar.Text>
                  Elaborado por: {" "}
                  <a href="https://jaggalvan.github.io/PorfolioAdrian/build/" target="_blank" rel="noreferrer"> Adrián Galván</a>
                </Navbar.Text>
              </Navbar.Collapse>
          </Container>
            
        </Navbar>


    </div>
  )
}
