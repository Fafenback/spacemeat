import React, {Component} from 'react';
import axios from 'axios';
import Loader from "./Loader"
class Liste extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: []
        };
        this.name = this
            .name
            .bind(this)
    }
    componentWillMount() {
        axios
            .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
            .then(res => {
                const api = res.data;
                this.setState({api})
            })
    }

    name() {
        if (this.state.api.length === 0) {
            console.log("lol")
        } else {
            const bossk = this
                .state
                .api
                .find(elt => elt.name === "Bossk");
            return bossk.name
        }
    }
    render() {
        return (
            <div>
                <p>{this.name()}</p>
            </div>
        );
    }
}

export default Liste;