import React,{useState,useEffect} from 'react'
import './UserForm.css'
import userImg from '../user.png'
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getUser, editUser} from '../redux/users/userAction'

function Edit() {

    let history = useHistory();
    const {id} = useParams()
    const dispatch = useDispatch();
    const u = useSelector(state => state.users.oneUser)

    const [user, setUser] = useState({id:id,username:'',password:'',email:'',mobile:''})

    useEffect(() => {
        if(u != null) {
            setUser(u) 
        }
        dispatch(getUser(id))
    }, [u])
    

    const handleChange = (e) => {
        e.preventDefault()
        setUser({...user,id:id,
            [e.target.name] : e.target.value,
        })
    }
    
    const updateUser = e => {
        e.preventDefault()

        const updatedUser = Object.assign(u,user);
        dispatch(editUser(updatedUser))

        history.push('/usersList')
    }

    const {username,password,email,mobile} = user

    return (
        <div className="mainForm">
            <div className="titleDiv">
                <img src={userImg} className="user-img" alt="user image"/>
                <h3>Edit Here</h3>
            </div>
            <form onSubmit={e => updateUser(e)} >
                <label htmlFor="username"><i className="fa fa-user-circle-o"></i>UserName </label>
                <input type="text" onChange={handleChange} name="username" value={username}  id="username" required />

                <label htmlFor="password"><i className="fa fa-lock"></i>Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} id="password" required/>

                <label htmlFor="email"><i className="fa fa-envelope-o"></i>Email Id</label>
                <input type="email"onChange={handleChange} name="email" value={email} id="email" required/>

                <label htmlFor="mobile"><i className="fa fa-mobile"></i>Mobile Number</label>
                <input type="text"onChange={handleChange} name="mobile" value={mobile} id="mobile" required/>

                <button type='submit'  className="submit-btn">UPDATE USER</button>
            </form><br/>            
            
        </div>
    )

}

export default Edit
