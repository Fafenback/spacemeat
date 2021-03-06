import React, { Component } from "react";
import LogoHeaders from "./classic.gif";
import LogoHeader from "./wait.gif";
import Victoire from "./victory.gif";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalExample.css";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      match: 1,
      name: "Anakin",
      firstname: "Skywalker"
    };

    this.toggle = this.toggle.bind(this);
    this.random = this.random.bind(this);
  }
  random() {
    const matched = Math.round(Math.random());
    console.log(matched);
    this.setState({ modal: Math.round(matched) });
  }

  toggle() {
    this.random();
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} className="Head">
            <img src={LogoHeader} className="gifpetit" alt="logo" />
            <img src={LogoHeaders} className="App-logo" alt="logo" />
            <img src={LogoHeader} className="gifpetit" alt="logo" />
          </ModalHeader>

          <ModalBody>
            Félicitation, on aurait pas cru possible que quelqu'un Flash sur
            toi...
            <img src={Victoire} className="imgvictoire" alt="logo" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" href="/match" onClick={this.toggle}>
              Oh yeah !
            </Button>{" "}
            <Button color="warning" href="/home" onClick={this.toggle}>
              Oups I did it again !
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
