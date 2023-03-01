// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [productCopy, setProductsCopy] = useState(jsonData);
  const filtro = (filtrar) => {
      if (filtrar ==="") {
     setProducts(productCopy)
      }
      else{setProducts(products.filter(product => (product.name.toLowerCase().includes(filtrar.toLowerCase()))))}
      
    }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filtro = {filtro}/>
       <ProductTable products = {products}/>
      </div>    
  )
}
export default ProductsPage;