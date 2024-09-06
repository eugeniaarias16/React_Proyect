import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "20px",
        alignItems: "center",
        width: "80px",
        justifyContent: "center",
      }}
    >
      <CiShoppingCart size={30} />
      10
    </div>
  );
};

export default CartWidget;
