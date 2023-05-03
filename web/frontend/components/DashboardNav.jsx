import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const DashboardNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="dashboard-nav">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" as="ul">
              <Nav.Item as="li">
                <Button
                  className="text-white text-decoration-none"
                  variant="link"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className="text-white text-decoration-none"
                  variant="link"
                  onClick={() => navigate("/orders")}
                >
                  Orders
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className="text-white text-decoration-none"
                  variant="link"
                  onClick={() => navigate("/accounts-setup")}
                >
                  Setup
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className="text-white text-decoration-none"
                  variant="link"
                  onClick={() => navigate("/automations")}
                >
                  Automations
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className=" text-white text-decoration-none"
                  variant="link"
                  onClick={() => navigate("/invoice-format")}
                >
                  Invoice Format
                </Button>
              </Nav.Item>

              <Nav.Item>
                <Button
                  className="text-white text-decoration-none"
                  variant="link"
                  onClick={() => navigate("/courier-reporting")}
                >
                  Courier Reporting
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DashboardNav;
