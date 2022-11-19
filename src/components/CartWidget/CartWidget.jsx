import { FaAtom } from 'react-icons/fa';


const CartWidget = () => {
  return (
    <div>
      <FaAtom></FaAtom>
    </div>
  )
}

export default CartWidget

// const [contador, guardarEnContador] = useState(0)

// const sumar = () => {
//   guardarEnContador(contador + 1)
// }

// console.log("agregarProducto")
// return (
//   <div>
//   {contador}
//   <button onclick={sumar}> + </button>
//   </div>
// )