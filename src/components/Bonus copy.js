import { useAddAccountsMutation, useGetAccountsQuery } from "../api/adminSlice"

function Admin () {

const {data, error, isLoading} = useGetAccountsQuery()

const [addAccount, response] = useAddAccountsMutation()

  return (
    <div className='card'>
        <div className="container">
          <h2>
              <b>Admin Component</b>
          </h2>
          {
            data && data.map(account => <p>{account.id} : {account.amount}</p>)
          }
            <button onClick={()=> addAccount(13,data.length+1)}>Add Account +</button>
        </div>
    </div>
  )
}

export default Admin