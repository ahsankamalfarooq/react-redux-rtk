import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount, decrement, getUserAccount} from '../slices/accountSlice'

function Account (){
    const [value, setValue] = useState(0)
    const amount = useSelector(state=>state.account.amount)
    const points = useSelector(state=>state.bonus.points)
    const dispatch = useDispatch()
   

  return (
    <div className='card'>
        <div className="container">
            <h2>
                <b>Account Component</b>
            </h2>
            <h3>Total Amount:${amount}</h3>
            <h3>TOtal Points:${points}</h3>
            <button onClick={()=>dispatch(increment())}>Increment +</button>
            <button onClick={()=>dispatch(decrement())}>Decrement -</button>
            <input type="text" onChange={(e)=>setValue(+e.target.value)}></input>
            <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By Amount</button>
            <button onClick={()=>dispatch(getUserAccount(1))}>Get User</button>

        </div>
    </div>
  )
}

export default Account
