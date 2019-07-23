import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const checkEatenFunc = (sushiID) => {
    return props.eatenSushi.includes(sushiID)
    
  }

  // const handleChange = 
  
  // const allSushis = Array.from(props)
  return (
    <Fragment>
      {/* add form here */}
      <form>
        <label>
          Add to Wallet:
          <input type="text" value={props.value} name="text" onChange={props.handleChange}></input>
        </label>
       
      </form>
      
      <div className="belt">
        {
         props.fourSushis.map(sushi => <Sushi key={sushi.id} renderSushi={sushi} addSushiToEaten={props.addSushiToEaten} eaten={checkEatenFunc(sushi.id)}/>)
        }
        <MoreButton updateFourSushis={props.updateFourSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer