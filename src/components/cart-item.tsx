import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


type CartItemProps = {
  cartItem: any;
  incrementHandler: () => void;
  decrementHandler: () => void;
  removeHandler: (id: string) => void;
};

const CartItemComponent = ({
  cartItem,
  incrementHandler,
  decrementHandler,
  removeHandler,
}: CartItemProps) => {
  const { photo, productId, name, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={() => decrementHandler()}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler()}>+</button>
      </div>

      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItemComponent;