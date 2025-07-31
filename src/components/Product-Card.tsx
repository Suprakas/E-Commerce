import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


type ProductsProps = {
  productId: string;
  photo: string;
  // photos: {
  //   url: string;
  //   public_id: string;
  // }[];
  name: string;
  price: number;
  stock: number;
  handler: () => void;
  // handler: (cartItem: CartItem) => string | undefined;
};

const server = "kcjkcnscks";

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  // photos,
  // stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt="" />
      {/* <img src={transformImage(photos?.[0]?.url, 400)} alt={name} /> */}
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() => handler()
            // handler({
            //   productId,
            //   price,
            //   name,
            //   photo: photos[0].url,
            //   stock,
            //   quantity: 1,
            // })
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