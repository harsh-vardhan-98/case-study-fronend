import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './userRegister.scss'

function AdminRegister() {
  const history = useHistory();
  const [fullname , setFullName] = useState('')
  const [email , setEmail] = useState('')
  const [contact , setContact] = useState('')
  const [age , setAge] = useState('')
//   const [secret , setSecret] = useState('')

  const register = (e)=>{
    console.log("clicked");
    // e.preventDefaults();
    const UserDetails = {fullname , email , contact , age }
    console.log(UserDetails);
    history.push("/userlogin")
  }

  return (
    <div className='section'>

<form>
    <div class="form-group heading">USER REGISTER</div>
  <div class="form-group">
    <label for="exampleInputFullName">Full Name</label>
    <input type="text" class="form-control" id="exampleInputFullName" aria-describedby="emailHelp" placeholder="Enter Full Name"  onChange={(e) => setFullName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputContact">Contact No</label>
    <input type="text" class="form-control" id="exampleInputContact" aria-describedby="emailHelp" placeholder="Enter Contact No" onChange={(e)=> setContact(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="exampleAge">Enter Your Age</label>
    <input type="text" class="form-control" id="exampleAge" placeholder="Enter Your Age" onChange={(e)=> setAge(e.target.value)}/>
  </div>
  <div class='form-group btn-box'>
  <button type="submit" class="btn btn-primary"
  onClick={(e)=>register(e)}
  >Submit</button>
  </div>
</form>
    </div>
  )
}

export default AdminRegister