import React, { Component } from 'react';
import './DirtbikeItem.css';
import { getDirtbike, getTires, updateDirtbike } from './utils.js';


class DirtbikeItem extends Component {
    state = { id: 0, brand: '', dirtbike: true, tirebrand: '', tires: [] }
    componentDidMount = async () => {
        const id = this.props.match.params.id
        const data = await getDirtbike(id);
        const tires = await getTires();
        this.setState({ ...data, tires})
        console.log(data)
    }
    getTireId = () => {
        const tire = this.state.tires.find((tire)=> tire.brand === this.state.tirebrand)
        console.log((tire.id))
        return tire.id;
    }
    handleChange = async(e) => {
        e.preventDefault();
        const dirtbikeData = {
            id: this.state.id,
            brand: this.state.brand,
            dirtbike: this.state.dirtbike,
            tire_id: this.getTireId(),
        }
        const data = await updateDirtbike(dirtbikeData)
    }
    render() { 
        return ( 
            <>
            <h1>{this.state.brand.toUpperCase()}</h1>
            <h1>{this.state.tirebrand}</h1>
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
                        <select value={this.state.dirtbike}
                        onChange={(e)=>{this.setState({dirtbike: e.target.value})}}
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>   
                    </div>
                    <div className="tire-field">
                        <label>Tires:</label>
                        <select value={this.state.tirebrand}
                        onChange={(e)=>{this.setState({tirebrand: e.target.value})}}
                        >
                            {this.state.tires.map((tire)=> {
                                return <option key={tire.brand} value={tire.brand}>{tire.brand}</option>
                            })}
                        </select>
                    </div>
                    <div id="submit-button">
                        <button onClick={this.handleChange}>Submit</button>
                    </div>
                </form>
            </section>
            </>
         );
    }
}
 
export default DirtbikeItem;