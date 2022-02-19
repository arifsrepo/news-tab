import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="App">
      <div className="main_body">
        <Container>
          <Row>
            <Col className="main_body_sub" sm={3} md={3} lg={3} xl={3}>
              <Navigation setToggle={setToggle} toggle={toggle}></Navigation>
            </Col>
            <Col className="main_body_sub" sm={9} md={9} lg={9} xl={9}>
              <Main toggle={toggle}></Main>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
