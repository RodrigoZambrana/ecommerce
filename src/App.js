import { useContext } from 'react'
import Home from './routes/home/home.component'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import { UserContext } from './contexts/user.context'
import Shop from './routes/shop/shop.component'

const App = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
      </Route>
    </Routes>
  )
}

export default App
