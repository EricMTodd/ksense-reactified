import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const params = useParams()
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(response => {
      setUser(response.data)
    })
    .catch(error => console.log(error))

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`).
    then(response => {
      setPosts(response.data)
    })
    .catch(error => console.log(error))
  }, [user])



  if (user && posts) {
    return(
      <div className='user'>
        <h1 style={{margin: '0 auto'}}>{user.username}</h1>
        <ol>
          {posts.map(post => <li key={post.id}><h3>{post.title}</h3><p>{post.body}</p></li>)}
        </ol>
      </div>
    )
  }

  return(
    <div className='user'>
      <h1 style={{margin: '0 auto'}}>Loading...</h1>
    </div>
  )

}

export default User