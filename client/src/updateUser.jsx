import React,{useState,useEffect} from "react";
import{useParams ,useNavigate} from "react-router-dom";
import axios from 'axios';
import { baseURL } from './utils/constant';

function UpdateUser () {
    const{id}= useParams()
    const[name,setName] =useState()
    const[email,setEmail] =useState()
    const[age,setAge] =useState()
    const navigate = useNavigate()


    useEffect(()=> {
        axios.get(`${baseURL}/getUser/`+id)
        .then(result => {console.log(result)
            setName (result.data.name)
            setEmail (result.data.email)
            setAge (result.data.age)
        })
        .catch (err => Console.log(err))
    },[])


    const Update = (e) =>{
        e.preventDefault();
        axios.put(`${baseURL}/updateUser/`+id,{name,email,age})
        .then(result => {
            console.log(result)
        navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>update User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                    value={name}  onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                     value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                     value={age}  onChange={(e) => setAge(e.target.value)} required/>
                </div>
                <button className="btn btn-success">update</button>
            </form>
            </div>
            </div>
    )
}

export default UpdateUser;
