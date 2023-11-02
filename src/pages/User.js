import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    const {id} = useParams()
    const [user, setUser] = useState({})
  
    useEffect(()=>{
      // code
      fetch(`http://localhost:4000/users/${id}`)
      .then(res=>res.json())
      .then((res)=>{
        // utilize the data
        setUser(res)
      })
  
    }, [])

  return (
    <div className='container row p-5'>
      <div className='col-md-6'>
         <img className='img-fluid' src={user.image_url} alt='loading' />

       </div>
      <div className='col-md-6'>
        <h6>{user.name}</h6>
        <h6>Age {user.age}</h6>
      </div>
      
        
    </div>
  )
}
