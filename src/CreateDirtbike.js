import React, { Component } from 'react';
import { getTires, createDirtbike } from './utils.js';
import './DirtbikeItem.css';
class CreateDirtbike extends Component {
    state = { brand: '', dirtbike: true, tirebrand: 'dunlop', tires: [], message: '', error: false, }
    
    componentDidMount = async() => {
        const tires = await getTires();
        this.setState({tires: tires})
        console.log(tires)
    }
    getTireId = () => {
        const tire = this.state.tires.find((tire)=> tire.brand === this.state.tirebrand)
        console.log(tire.id)
        return tire.id;
    }
    handleChange = (e) => {
        e.preventDefault();
        const dirtbikeData = {
            brand: this.state.brand,
            dirtbike: this.state.dirtbike,
            tire_id: this.getTireId()
        }
        const data = createDirtbike(dirtbikeData)
        if (data.error){
            this.setState({message: data.error, error: true})
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
                    <h1>{this.state.message}</h1>
                </div>
                )}
                    {this.state.error && (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
                )}
                <h1>{this.state.brand.toUpperCase()}</h1>
            <section className="item-section">
                <form onSubmit={this.handleChange} id="update-dirtbike">
                    <div className="input-field">
                        <label>Brand:</label>
                        <input 
                        onChange={(e)=>{this.setState({brand: e.target.value})}}
                        type="text" 
                        required/>
                    </div>
                    <div className="true-false">
                        <label>Dirtbike</label>
                        <select
                        onChange={(e)=>{this.setState({dirtbike: e.target.value})}}
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
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
 
export default CreateDirtbike;