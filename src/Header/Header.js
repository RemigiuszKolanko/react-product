import "./Header.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <>
      <Navbar className="d-block" bg="light" expand="lg">
        <Row>
          <Col xs={3} className="d-xs-block d-md-none">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
          <Col xs="6" md="3">
            <Navbar.Brand href="#">
              <img src={logo} className="logo" alt="logo" />
            </Navbar.Brand>
          </Col>
          <Col md={4} className="d-none d-md-block">
            <Form className="d-flex header-form">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
          <Col xs={3} md={3} className="header-basket">
            <div className="d-flex"> 
              <FontAwesomeIcon
                className="header-basket-icon"
                icon={faShoppingBasket}
              />
              <Badge className="header-basket-badge" bg="secondary">
                9
              </Badge>
              <span className="header-basket-price d-none d-md-block">565,00 kr</span>
            </div>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <Button
              className="header-checkout-button"
              variant="outline-danger"
            >
              Check out
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link title="All our products" href="#">
                  All our products
                </Nav.Link>
                <Nav.Link title="Inspiration for the office" href="#">
                  Inspiration for the office
                </Nav.Link>
                <Nav.Link title="About OS" href="#">
                  About OS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};
