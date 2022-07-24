import { useContext } from 'react'
import Home from './routes/home/home.component'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import { UserContext } from './contexts/user.context'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/ckeckout/checkout.component'

const App = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
