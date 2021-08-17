import React, { Component } from 'react';
import { getItem } from './utils.js';
import './DirtbikeList.css';

class DirtbikeList extends Component {
    state = { dirtbikes: [] }
    componentDidMount = async() => {
        const data = await getItem()
        this.setState({dirtbikes: data})
        console.log(this.state.dirtbikes)
    }
    render() { 
        return ( 
            <section className="display-section">
            {this.state.dirtbikes.map((bike) => (    
            <div className="bike-logo">
                <h1 id="id" key={bike.id}>{bike.id}</h1>
                <h1 key={bike.brand}>{bike.brand.toUpperCase()}</h1>
                <h2 key={bike.tirebrand}>Tires: {bike.tirebrand}</h2>
                <h2 key={bike.dirtbike}>Dirtbike: {bike.dirtbike ? 'True' : 'False'}</h2>
             </div>
            ))
        }
            </section>
         );
    }
}
 
export default DirtbikeList;