import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice'

const Bonus = () => {

  const points = useSelector(state=>state.bonus.points)
  const amount = useSelector(state=>state.account.amount)
  const dispatch = useDispatch()


  return (
    <div className='card'>
        <div className="container">
        <h2>
                <b>Bonus Component</b>
            </h2>
            <h3>Total Amount:${amount}</h3>
            <h3>TOtal Points:${points}</h3>
            {/* <button onClick={()=>dispatch(increment())}>Increment +</button> */}
            <button onClick={()=>dispatch(increment())}>Increment +</button>
        </div>
    </div>
  )
}

export default Bonus