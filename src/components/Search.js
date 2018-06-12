import React, {Component} from "react";
import axios from "axios";
import './Search.css'
import CheckBox from './CheckBox'
import Card from './Card'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
            filtre: {},
            filtreApi: [],
            compteur: 0
        };
        this.update = this
            .update
            .bind(this);
        this.tri = this
            .tri
            .bind(this);
        this.augmenter = this
            .augmenter
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

    update(filt) {
        this.setState({filtre: filt})
        console.log(this.state.filtre);
        return this.tri()

    }
    tri() {
        /**
 * Filters an array of objects with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria as the property names
 * @return {Array}
 */

        function multiFilter(array, filters) {
            const filterKeys = Object.keys(filters);
            return array.filter((item) => {
                return filterKeys.every(key => ! !~ filters[key].indexOf(item[key]));
            });
        }
        const filtreAp = multiFilter(this.state.api, this.state.filtre)
        console.log(filtreAp);
        return this.setState({filtreApi: filtreAp})
    }
    augmenter() {
        this.setState({
            compteur: this.state.compteur + 1
        });
    }
    render() {
        const page1 = this
            .state
            .api
            .map((elt, i) => <Card
                height={elt.height}
                name={elt.name}
                eyeColor={elt.eyeColor}
                image={elt.image}
                count={this.augmenter}/>);
        const page2 = this
            .state
            .filtreApi
            .map((elt, i) => <Card
                height={elt.height}
                name={elt.name}
                eyeColor={elt.eyeColor}
                image={elt.image}
                count={this.augmenter}/>);

        return page2.length > 0
            ? (

                <div>
                    <h1>Find your meat</h1>
                    <CheckBox maj={this.update} pression={this.tri}/> {page2[this.state.compteur]}
                </div>
            )
            : (
                <div>
                    <h1>Find your meat</h1>
                    <CheckBox maj={this.update} pression={this.tri}/> {page1[this.state.compteur]}
                </div>
            );
    }
}
export default Search;
