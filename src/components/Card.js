import React, {Component} from 'react';
import {
    Card,
    CardImg,

    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import BoutonOui from "./boutons/BoutonOui";
import BoutonNon from "./boutons/BoutonNon";
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.randomMatch = this
            .randomMatch
            .bind(this);
        this.miam = this
            .miam
            .bind(this)
    }
    randomMatch() {
        const matching = Math.round(Math.random());
        this.setState({matching});
        return this.props.count
    }

    miam() {
        return this.state.matching === 1
            ? <BoutonOui/>
            : <BoutonNon/>;
    }

    render() {
        return (
            <Card>
                <div className="containerImg"><CardImg top width="100%" src={this.props.image} alt="Card image cap"/></div>
                <CardBody className="card_body">
                    <CardTitle className="prenom">
                        {this
                            .props
                            .name
                            .split(" ")
                            .shift()}
                    </CardTitle>
                    <CardSubtitle>
                        Poids: {this.props.mass}kg, Taille: {this.props.height}m, Magnifiques Yeux{" "} {this.props.eyeColor}
                    </CardSubtitle>
                    <Button className="lol" color="danger" onClick={this.randomMatch}>
                        Beurk
                    </Button>
                    {this.miam()}

                </CardBody>
            </Card>
        );
    }
}

export default Card;