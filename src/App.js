import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Header } from "./Header/Header";

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
    </Container>
  );
}

export default App;
