import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import './styles/styles.sass'
import { NavBar } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Container fluid>
          <Route exact path="/" component={Home} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
