
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/home'></Link>home</li>
        <li><Link to='/about'></Link>about</li>
        <li><Link to='/features'></Link>features</li>
        <li><Link to='/contact'></Link>contact</li>
      </ul>
    </div>
  )

}

export default Navbar
