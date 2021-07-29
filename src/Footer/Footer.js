import "./Footer.css";
import logo from "../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Col xs="12" md="6">
          <a href="#" title="Office Suplies">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
            odio.
          </p>
        </Col>
        <Col xs="12" md="3">
          <h3 className="footer-header">Bestsellers</h3>
          <Row>
            <Col xs="12" md="6">
              <ul className="footer-list">
                <li>
                  <a href="#" title="A4">
                    <span>A4</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="A5">
                    <span>A5</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Pens">
                    <span>Pens</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Staplers">
                    <span>Staplers</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs="12" md="6">
              <ul className="footer-list">
                <li>
                  <a href="#" title="A4">
                    <span>A4</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="A5">
                    <span>A5</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Pens">
                    <span>Pens</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Staplers">
                    <span>Staplers</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="3">
          <h3 className="footer-header">We're social!</h3>
          <ul className="footer-social-list">
            <li>
              <a href="#" title="Facebook">
                <FontAwesomeIcon
                  className="footer-social-list-icon"
                  icon={faShoppingBasket}
                />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <FontAwesomeIcon
                  className="footer-social-list-icon"
                  icon={faShoppingBasket}
                />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" title="LinkedIn">
                <FontAwesomeIcon
                  className="footer-social-list-icon"
                  icon={faShoppingBasket}
                />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};
