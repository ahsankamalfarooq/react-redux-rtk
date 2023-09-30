import { useAddAccountsMutation, useUpdateAccountMutation ,useGetAccountsQuery, useDeleteAccountMutation } from "../api/adminSlice"

function Admin () {

const {data, error, isLoading} = useGetAccountsQuery()

const [addAccount, response] = useAddAccountsMutation()
const [deleteAccount] = useDeleteAccountMutation()
const [updateAccount] = useUpdateAccountMutation()

  return (
    <div className='card'>
        <div className="container">
          <h2>
              <b>Admin Component</b>
          </h2>
          {
            data && data.map(account => <p>{account.id} : {account.amount}
            <button onClick={()=> deleteAccount(account.id)}>Delete Account +</button>
            <button onClick={()=> updateAccount(account.id, 12)}>Update Account +</button>

            </p>)

          }
            <button onClick={()=> addAccount(13,data.length+1)}>Add Account +</button>
        </div>
    </div>
  )
}

export default Admin