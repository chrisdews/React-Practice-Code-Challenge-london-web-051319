import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:4000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi : [],
    moneyLeft: 100,
    value: 0
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      // .then(console.log)
      .then(sushis => this.setState({ sushis }))
  }

  updateFourSushis = () => {
    
    this.setState({
      sushis : this.state.sushis.slice(4,-1)
    }) 
  }

  addSushiToEaten = (renderSushi) => {
    // debugger
    const sushiID = renderSushi.id
    const eatenSushi = this.state.eatenSushi
    if (this.state.eatenSushi.includes(sushiID)) return
    
    let moneyLeft = this.state.moneyLeft
    let newMoneyLeft = 0
    if (moneyLeft < renderSushi.price){
      newMoneyLeft = moneyLeft 
    } else {
      newMoneyLeft = moneyLeft - renderSushi.price
      eatenSushi.push(sushiID)
    }
     
    this.setState({ 
      eatenSushi : eatenSushi,
      moneyLeft : newMoneyLeft
     })
  }

  addToWallet = (e) => {
    
    this.state.moneyLeft += this.state.value
    e.preventDefault()
  }

  handleChange = (e) => {
    const newValue = parseInt(e.target.value)
    this.setState({
      value: newValue,
      moneyLeft: this.state.moneyLeft + newValue
    })
  }

  render() {

    const fourSushis = this.state.sushis.slice(0,4)



    return (
      <div className="app">
        <SushiContainer fourSushis={fourSushis} updateFourSushis={this.updateFourSushis} addSushiToEaten={this.addSushiToEaten} eatenSushi={this.state.eatenSushi} moneyLeft={this.state.moneyLeft} addToWallet={this.addToWallet} handleChange={this.handleChange} value={this.state.value}/>
        <Table moneyLeft={this.state.moneyLeft} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;