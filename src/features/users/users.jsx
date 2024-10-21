import { useDispatch, useSelector } from "react-redux"
import { personDelete, personSwipeDown,  personSwipeUp,  salaryDown, salaryUp } from "./users.slice"

export const Users = () => {
  const users = useSelector(state => state.items)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Users</h2>
      <table>
         <thead>
            <tr>
             <th>id</th>
             <th>name</th>
             <th>gender</th>
             <th>salary</th>
             <th>actions</th>
            </tr>
         </thead>
         <tbody>
         {
            users.map(user => 
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.salary}</td>
                <td>
                   <button onClick={()=> dispatch(salaryUp(user.id))}>Salary up</button>
                   <button onClick={()=> dispatch(salaryDown(user.id))}>Salary down</button>
                   <button onClick={()=> dispatch(personSwipeUp(user.id))}>Swipe up</button>
                   <button onClick={()=> dispatch(personSwipeDown(user.id))}>Swipe down</button>
                   <button onClick={()=> dispatch(personDelete(user.id))}>Delete</button>
                </td>
              </tr>
            )
         }
      </tbody>
    </table>

    </>
  )
}

