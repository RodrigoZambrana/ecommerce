import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchCaregories() {
      const categoryMap = await getCategoriesAndDocuments('categories')
      console.log(categoryMap)
    }
    fetchCaregories()
  }, [])

  const value = { products }
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
