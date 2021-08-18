import React, { Component } from 'react';
import './DirtbikeItem.css';
import { getDirtbike, getTires, updateDirtbike } from './utils.js';


class DirtbikeItem extends Component {
    state = { id: 0, brand: '', dirtbike: true, tirebrand: '', tires: [], message: '', error: false, }
    componentDidMount = async () => {
        const id = this.props.match.params.id
        const data = await getDirtbike(id);
        const tires = await getTires();
        this.setState({ ...data, tires})
    }
    getTireId = () => {
        const tire = this.state.tires.find((tire)=> tire.brand === this.state.tirebrand)
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
        if (data.error){
            this.setState({message: 'ERROR!!', error: true})
        } else {
            this.setState({message: 'SUCCESS!!', error: false})
            setTimeout(() => {
                this.props.history.push('/');
                this.setState({message: '' })
        }, 3000);
    }
    }
    render() { 
        return ( 
            <>
                {!this.state.error && (
            <div>
                <h1 className="heading">{this.state.message}</h1>
            </div>
            )}
                {this.state.error && (
            <div>
                <h1 className="heading">{this.state.message}</h1>
            </div>
            )}
            <h1 className="heading">{this.state.brand.toUpperCase()}</h1>
            <section className="item-section">
                <form onSubmit={this.handleChange} id="update-dirtbike">
                    <div className="input-field">
                        <label>Brand:</label>
                        <input 
                        onChange={(e)=>{this.setState({brand: e.target.value})}}
                        type="text" 
                        value={this.state.brand} 
                        required/>
                    </div>
                    <div className="true-false">
                        <label>Dirtbike:</label>
                        <select value={this.state.dirtbike}
                        onChange={(e)=>{this.setState({dirtbike: e.target.value})}}
                        >
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>   
                    </div>
                    <div className="tire-field">
                        <label>Tires:</label>
                        <select id="select" value={this.state.tirebrand}
                        onChange={(e)=>{this.setState({tirebrand: e.target.value})}}
                        >
                            {this.state.tires.map((tire)=> {
                                return <option key={tire.brand} value={tire.brand}>{tire.brand}</option>
                            })}
                        </select>
                    </div>
                    <div id="submit-button">
                        <button id="button" type="submit">Submit</button>
                    </div>
                </form>
            </section>
            </>
         );
    }
}
 
export default DirtbikeItem;