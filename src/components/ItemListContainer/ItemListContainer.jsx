import "./ItemListContainer.css"
import React from 'react'
import { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'

const ItemListContainer = (obj) => {

  const [products, setProducts] = useState([])
  const [bool, setBool] = useState(true)
  

  useEffect(() => {
    gFetch
    .then(resp => setProducts(resp))
    .catch(err => console.log(err))
    .finally(() => console.log("siempre"))},
   [])

  const cambiarEstado = () => {
    setBool(!bool)
  }

  console.log(products)
  return (
    <div> 
      <h1> ItemListContainer </h1>
      <h2>Contenido de lista</h2>
      <button onClick={cambiarEstado}>cambiar estado</button>

      { products.map(obj => 
          <div key={obj.id} className="w-10 card border-success mb-3" >
            <div className="card-header">
              {obj.name}
            </div>
            <div className="card-body">
              {obj.stock}
            </div>
            <div className="card-body">
              <img src={obj.foto} className="w-10 center"/>
            </div>
            <div className="card-footer">
              Precio: {obj.precio}
            </div>
          </div>)}
    </div>
  )
}

export default ItemListContainer