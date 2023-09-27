import { useGetAccountsQuery } from "../api/adminSlice"

function Admin () {

const {data, error, isLoading} = useGetAccountsQuery()

  return (
    <div className='card'>
        <div className="container">
          <h2>
              <b>Admin Component</b>
          </h2>
          {
            data && data.map(account => <p>{account.id} : {account.amount}</p>)
          }
            {/* <button onClick={()=>dispatch(increment())}>Increment +</button> */}
        </div>
    </div>
  )
}

export default Admin