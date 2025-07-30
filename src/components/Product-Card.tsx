import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


type ProductsProps = {
  productId: string;
  photos: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void
};

const server = "nfkrfmrkfrmf"
const ProductCard = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler
}: ProductsProps) => {

  return (
    <div className="product-card">
      <img src={`${server}/${photos}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler()
          }
        >
          <FaPlus />
        </button>

        <Link to={`/product/${productId}`}>
          <FaExpandAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;