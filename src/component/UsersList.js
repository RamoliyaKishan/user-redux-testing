import './UsersList.css'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {deleteUser,deleteAllUsers} from '../redux/users/userAction'

function UsersList(props) {
    
    const allList = useSelector(user => user.users.users)
    const dispatch = useDispatch();

    return (
        <div className="text-center text-white">
            <h1>User's list</h1>
            <button onClick={() => dispatch(deleteAllUsers())} className='delete mb-3'>Clear List</button>
            <table id="userTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email Id</th>
                        <th>mobile Name</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {!allList ? null : allList.map((user,i) => <tr key={i+1}>
                            <td>{i+1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <button className="delete" onClick={() => dispatch(deleteUser(user.id))}>
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <Link className="edit" to={`/edit/${user.id}`}>
                                    <i className="fa fa-pencil-square-o"></i>
                                </Link>
                            </td>
                        </tr>)}
                    </tbody>
            </table>
            
        </div>
    )
}

export default UsersList
