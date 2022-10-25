import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import User from './User'

const Main = () => {

  const mainStyles = {
    backgroundColor: 'rgba(50, 50, 50, 1)',
    padding: '0 16.5% 0 16.5%',
    height: 'calc(100vh - 75px)'
  }

  return(
    <main style={mainStyles}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<User />} />
      </Routes>
    </main>
  )
}


export default Main