"use client"
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi"
import { useCart } from "../context/CartContext"

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border">
      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <p className="text-blue-600 font-bold">${item.price}</p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiMinus className="text-gray-600" />
        </button>

        <span className="w-8 text-center font-semibold">{item.quantity}</span>

        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiPlus className="text-gray-600" />
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors mt-2"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  )
}

export default CartItem
