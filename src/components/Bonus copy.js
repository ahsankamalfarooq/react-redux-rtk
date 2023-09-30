import { useAddAccountsMutation, useUpdateAccountMutation ,useGetAccountsQuery, useDeleteAccountMutation } from "../api/adminSlice"

function Admin () {

const {data, error, isLoading, isSuccess} = useGetAccountsQuery()

const [addAccount, response] = useAddAccountsMutation()
const [deleteAccount] = useDeleteAccountMutation()
const [updateAccount] = useUpdateAccountMutation()

  return (
    <div className='card'>
        <div className="container">
          <h2>
              <b>Admin Component</b>
          </h2>
          {isLoading? <p>Loading ...</p>: null}
          {isSuccess &&
            data && data.map(account => <p>{account.id} : {account.amount}
            <button onClick={()=> deleteAccount(account.id)}>Delete Account +</button>
            {/* we do like this ({id:account.id, amount:12})} cuz of the documentation of redux */}
            <button onClick={()=> updateAccount({id:account.id, amount:12})}>Update Account +</button>

            </p>)

          }
            <button onClick={()=> addAccount(13,data.length+1)}>Add Account +</button>
        </div>
    </div>
  )
}

export default Admin