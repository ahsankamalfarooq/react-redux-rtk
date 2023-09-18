import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from '../reducers/reward'

function Reward () {

  const dispatch = useDispatch()
  const points = useSelector(state=>state.reward.points)
  const amount = useSelector(state=>state.account.amount)


  return (
    <div className='card'>
        <div className="container">
        <h2>
                <b>Reward Component</b>
            </h2>
            <h3>Total Amount:${amount}</h3>
            <h3>TOtal Points:${points}</h3>
            <button onClick={()=>dispatch(increment())}>Increment +</button>
            <button onClick={()=>dispatch(incrementByAmount(7))}>Increment By Seven</button>
        </div>
    </div>
  )
}

export default Reward