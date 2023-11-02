import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() 
 {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    // code
    fetch("http://localhost:4000/users")
    .then(res=>res.json())
    .then((res)=>{
      // utilize the data
      setLoading(false)

      setUsers(res)
    })

  }, [])

  console.log(users);

  return (
    <div>
     <h6>Home</h6> 
     {
      users.length===0 && <p className='alert alert-info text-center'>No users found!</p>
     }
     {
      loading===true &&
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
     }

     <div className='container mx-auto row'>
       {
        users && users.map(user => (
          <Link to={`/user/${user.id}`} className='col-md-3' key={user.email}>
            <img className='img-fluid' src={user.image_url} alt='loading' />
            <h6>{user.name}</h6>
            <p>Age {user.age}</p>
          </Link>
          
        ))
       }
     </div>
    
    </div>
  )
}
export default Home;