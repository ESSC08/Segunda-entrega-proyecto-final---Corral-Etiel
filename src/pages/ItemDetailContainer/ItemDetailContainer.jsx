import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../utils/gFetch"

const ItemDetailContainer = () => {
    // llamada a la api para un producto en particular
    // guardar en un estado el producto
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(()=>{
      gFetch(productId)
      .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

    console.log(product)
  return (
    <div className="border border-5 border-success">
        {loading ? 
                <h2>Cargando...</h2> 
            : 
                <ItemDetail product={product} />
        }
        
    </div>
  )
}

export default ItemDetailContainer
