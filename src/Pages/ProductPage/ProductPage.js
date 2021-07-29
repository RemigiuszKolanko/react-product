import "./ProductPage.css";
import { Row, Col, Form } from "react-bootstrap";

export const ProductPage = ({ product }) => {
  return (
    <article>
      <Row>
        <Col md="4">foto</Col>
        <Col md="8">
          <h1>{product.name}</h1>
          <div className="priceContainer">
            <span className="extra-price">{product.extraPrice} kr</span>
            <span className="standard-price">{product.standardPrice} kr</span>
          </div>
          <Form.Select defaultValue="White">
            <option>White</option>
            <option>Black</option>
            <option>Yellow</option>
          </Form.Select>
        </Col>
      </Row>
    </article>
  );
};
