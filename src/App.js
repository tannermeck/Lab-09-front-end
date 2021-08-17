import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  DirtbikeList from './DirtbikeList.js';
import  DirtbikeItem from './DirtbikeItem.js';
import CreateDirtbike from './CreateDirtbike.js';
import Header from './Header.js';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={DirtbikeList}/>
            <Route path="/dirtbikes/:id" component={DirtbikeItem}/>
            <Route path="/create" component={CreateDirtbike}/>
          </Switch>
        </BrowserRouter>
      </>
     );
  }
}
 
export default App;