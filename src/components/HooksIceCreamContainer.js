import React from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports"
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hooks Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream()) }>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer