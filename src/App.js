import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  FormControl,
  Nav,
  NavItem
} from "react-bootstrap";

export class App extends Component {
  state = {
    cfg: {
      gw: "1.1.1.1",
      ntp: "000.00.1",
      ip: "455.12.32"
    },
    default: null,
    page: 0
  };

  componentDidMount() {
    this.setState({ default: { ...this.state.cfg } });
  }

  handleChange = e => {
    this.setState({
      cfg: { ...this.state.cfg, [e.target.id]: e.target.value }
    });
  };
  changePage = e => {
    this.setState({ page: e });
  };

  reset = () => {
    this.setState({ cfg: this.state.default });
  };
  render() {
    console.log(this.state.page);
    const { cfg, page } = this.state;
    return (
      <div>
        <div style={{ paddingBottom: "50px" }} className="container">
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                style={
                  page === 0
                    ? { backgroundColor: "#f2f2f2" }
                    : { opacity: "0.5" }
                }
                eventKey={page}
                active={page === 0 ? true : false}
                onClick={() => this.changePage(0)}
              >
                GateWay
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={
                  page === 1
                    ? { backgroundColor: "#f2f2f2" }
                    : { opacity: "0.5" }
                }
                active={page === 1 ? true : false}
                onClick={() => this.changePage(1)}
                eventKey={page}
              >
                NTP
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => this.changePage(2)}>
              <Nav.Link
                style={
                  page === 2
                    ? { backgroundColor: "#f2f2f2" }
                    : { opacity: "0.5" }
                }
                active={page === 2 ? true : false}
                eventKey="link-2"
              >
                IP
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Container className="status-class">
          <Row style={{ paddingBottom: "20px" }}>
            <Col style={{ border: "px solid red" }}>
              <div class="text-div float-right">
                <h5 class="text" style={{ border: "0px solid green" }}>
                  GateWay:
                </h5>
              </div>
            </Col>
            <Col>
              <FormControl
                id="gw"
                onChange={e => this.handleChange(e)}
                value={cfg.gw}
              />
            </Col>
            <Col>
              <div className="text-div float-left">
                <p className="text status-text">// 1312456456456</p>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "20px" }}>
            <Col style={{ border: "px solid red" }}>
              <div class="text-div float-right">
                <p class="text" style={{ border: "0px solid green" }}>
                  NTP:
                </p>
              </div>
            </Col>
            <Col>
              <FormControl
                id="ntp"
                onChange={e => this.handleChange(e)}
                value={cfg.ntp}
              />
            </Col>
            <Col>
              <div className="text-div float-left">
                <p className="text status-text">// 1312456456456</p>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "20px" }}>
            <Col style={{ border: "px solid red" }}>
              <div class="text-div float-right">
                <p class="text" style={{ border: "0px solid green" }}>
                  IP Address:
                </p>
              </div>
            </Col>
            <Col>
              <FormControl
                id="ip"
                onChange={e => this.handleChange(e)}
                value={cfg.ip}
              />
            </Col>
            <Col>
              <div className="text-div float-left">
                <p className="text status-text">// 1312456456456</p>
              </div>
            </Col>
          </Row>
          <button onClick={() => this.reset()}>Rreset</button>
        </Container>
      </div>
    );
  }
}

export default App;

{
  /* <Container>
  <Row>
    <Col style={{ border: "2px solid red" }} className="float-right">
      labas
    </Col>
    <Col>
      <FormControl value="123456789" />
    </Col>
    <Col>1312456456456</Col>
  </Row>
</Container>; */
}
