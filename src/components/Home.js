import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
import "./Home.css";
import Badge from "./Badge";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      pretendants: [],
      compteur: 0,
      nom: ""
    };
    this.augmenter = this.augmenter.bind(this);
  }
  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const api = res.data;
        this.setState({ api });
      });
  }

  componentDidMount() {
    const generePretendants = () => {
      let tabDoublons = [];
      console.log(pretendants);
      let idaleatoire = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      for (let i = 0; i < 10; i++) {
        let id = idaleatoire(1, 87);
        tabDoublons.push(id);
      }
      let pretendants = [...new Set([...tabDoublons])];
      this.setState({ pretendants });
    };
    generePretendants();
  }

  augmenter(event) {
    let compteur = this.state.compteur + 1;
    this.setState({ compteur });
  }

  render() {
    const page1 = this.state.api[this.state.pretendants[this.state.compteur]];

    return page1 !== undefined ? (
      <div>
        <Badge />
        <div className="identifiant">Yaa-yaah CHEWIE!</div>
        <h1>Here is your local meat</h1>
        <Card>
          <CardImg top width="100%" src={page1.image} alt="Card image cap" />
          <CardBody className="card_body">
            <CardTitle className="prenom">
              {page1.name.split(" ").shift()}
            </CardTitle>
            <CardSubtitle className="detail">
              Weight: {page1.mass}kg, Height: {page1.height}m, Wonderful{" "}
              {page1.eyeColor} eyes
            </CardSubtitle>
            <Button color="danger" onClick={e => this.augmenter(e)}>
              Beurk
            </Button>
            <Button color="success">Miam</Button>
          </CardBody>
        </Card>
      </div>
    ) : (
      <div>{"hvuhz"}</div>
    );
  }
}

export default Home;
