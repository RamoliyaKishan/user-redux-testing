import React,{useState} from 'react'
import './UserForm.css'
import userImg from '../user.png'
import {v4 as uuid} from 'uuid'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addUser} from '../redux/users/userAction'

function UserForm(props) {

    const [user, setUser] = useState({id:uuid(),username:'',password:'',email:'',mobile:''})
    const {username,password,email,mobile} = user

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault()
        setUser({...user,
            [e.target.name] : e.target.value,
        })
    }
    
    const createUser = e => {
        e.preventDefault()
        if(user !== '' ){
            dispatch(addUser(user));
            history.push('/usersList')
        }

    }

    return (
        <div className="mainForm">
            <div className="titleDiv">
                <img src={userImg} className="user-img" alt="user"/>
                <h3>SignUp Here</h3>
            </div>
            <form onSubmit={createUser} >
                <label htmlFor="username"><i className="fa fa-user-circle-o"></i>UserName </label>
                <input type="text" onChange={handleChange} name="username" value={username}  id="username" required />

                <label htmlFor="password"><i className="fa fa-lock"></i>Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} id="password" required/>

                <label htmlFor="email"><i className="fa fa-envelope-o"></i>Email Id</label>
                <input type="email"onChange={handleChange} name="email" value={email} id="email" required/>

                <label htmlFor="mobile"><i className="fa fa-mobile"></i>Mobile Number</label>
                <input type="text"onChange={handleChange} name="mobile" value={mobile} id="mobile" required/>

                <button type='submit'  className="submit-btn">SIGN UP</button>
            </form><br/>            
            
        </div>
    )
}

export default UserForm
