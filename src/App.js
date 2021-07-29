import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar/Sidebar";
import { ProductPage } from "./Pages/ProductPage/ProductPage";

const sidebarMenu = [
  "Paper clips",
  "Post-it notes",
  "Staples",
  "Hole punches",
  "Binders",
  "Staplers",
  "Laminators",
  "Writing utensils",
  "Paper",
  "Computers",
  "Printers",
  "Fax machines",
  "Photocopiers",
  "Cash registers",
  "Office furniture",
  "Chairs",
  "Cubicles",
  "Filing cabinet",
  "Armoire desks",
];

const paperProduct = {
  name: "Paper",
  extraPrice: "565,00",
  standardPrice: "670",
};

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col className="d-none d-md-block" md="4">
          <Sidebar sidebarMenu={sidebarMenu} />
        </Col>
        <Col xs="12" md="8">
          <ProductPage product={paperProduct} />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
