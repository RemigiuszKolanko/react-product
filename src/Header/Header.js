import "./Header.css";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Badge
} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <img src={logo} className="logo" alt="logo" />
      </Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <FontAwesomeIcon className="header-basket-icon" icon={faShoppingBasket} />
      <Badge className="header-basket-badge" bg="secondary">9</Badge>
      <span className="header-basket-price d-flex">565,00 kr</span>
      <Button className="header-checkout-button" variant="outline-danger">Check out</Button>
    </Navbar>
  );
};
