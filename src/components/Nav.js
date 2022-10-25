import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Nav = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  const navStyles = {
    backgroundColor: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  return(
    <nav style={navStyles}>
      <Link to='/'>Home</Link>
      {users.map(user => <Link key={user.id} to={`/${user.id}`}>{user.username}</Link>)}
    </nav>
  )
}

export default Nav