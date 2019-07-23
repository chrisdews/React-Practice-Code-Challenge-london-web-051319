import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    
    
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.addSushiToEaten(props.renderSushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
       
          props.eaten ? null : <img id={props.renderSushi.id} src={props.renderSushi.img_url} price={props.renderSushi.price} width="100%" />
        }
      </div>
       <h4 className="sushi-details">
         {props.renderSushi.name} - ${props.renderSushi.price}
       </h4>
    </div>
  )
}

export default Sushi