import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <Container>
        <Header />
        <Footer />
    </Container>
  );
}

export default App;
