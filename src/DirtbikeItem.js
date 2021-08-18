import React, { Component } from 'react';
import './DirtbikeItem.css';
import { getDirtbike, getTires } from './utils.js';


class DirtbikeItem extends Component {
    state = { id: 0, brand: '', dirtbike: true, tirebrand: '', tires: [] }
    componentDidMount = async () => {
        const id = this.props.match.params.id
        const data = await getDirtbike(id);
        // console.log(data)
        const tires = await getTires();
        
        this.setState({ ...data, tires})
    }
    render() { 
        console.log(typeof(this.state.dirtbike))
        return ( 
            <section className="item-section">
                <form id="update-dirtbike">
                    <div className="input-field">
                        <label>Brand:</label>
                        <input 
                        onChange={(e)=>{this.setState({brand: e.target.value})}}
                        type="text" 
                        value={this.state.brand}></input>
                    </div>
                    <div className="true-false">
                        <label>Dirtbike</label>
                        <select defaultValue={this.state.dirtbike ? 'true' : 'false'}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>   
                    </div>
                    <div className="tire-field">
                        <label>Tires:</label>
                        <select defaultValue={this.state.tirebrand}>
                            {this.state.tires.map((tire)=> {
                                return <option selected={tire.brand === this.state.tirebrand} key={tire.brand} value={tire.brand}>{tire.brand}</option>
                            })}
                        </select>
                    </div>
                    <div id="submit-button">
                        <button>Submit</button>
                    </div>
                </form>
            </section>
         );
    }
}
 
export default DirtbikeItem;