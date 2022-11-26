import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (newProductCart) => {
        setCartList( [...cartList, newProductCart ])
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList, // estado
            agregarAlCarrito, // función para modificar el estado
            borrarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
