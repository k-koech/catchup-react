import "../styles/Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() 
{
  
  return (
    <div>
    <div className="navbar">
       <Link to="/">
           <h5>Navbar</h5>
        </Link> 
       <div className="Links">
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/adduser">Add User</Link>
           <a href="/gtsrdgbfsdb">Whatsapp</a>
       </div>

    </div>

</div>
  )
}

