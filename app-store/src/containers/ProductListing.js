import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function ProductListing() {
  const history = useHistory();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response?.data));
  };
  console.log(products);
  function viewProduct(id) {
    history.push(`/productDetails/${id}`);
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-2xl font-semibold text-metalBlack my-6">
        New Arrivals
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-4 gap-10 grid-rows-2  ">
          {products
            ?.filter((e) => e?.category !== "jewelery" && e?.id !== 1)
            ?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col w-72 bg-lightGray p-3 rounded-lg drop-shadow-lg transform transition-all hover:scale-110"
                >
                  <div
                    className="flex justify-center mb-4 bg-metalwhite  border-2 rounded-lg cursor-pointer border-mainBg relative hover:border-metalYellow"
                    onClick={() => viewProduct(item?.id)}
                  >
                    <img
                      src={item?.image}
                      alt={"product"}
                      className="self-center w-36 h-36 object-cover"
                    />
                    <span>
                      <i
                        className="fa fa-heart-o text-metalGrey mt-2 absolute top-0 right-1 cursor-pointer"
                        style={{
                          fontSize: "20px",
                          hover: { fontSize: "26px" },
                        }}
                      ></i>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-md font-semibold text-metalBlack mb-1">
                        {item?.title?.split(" ")?.[0]}{" "}
                        {item?.title?.split(" ")?.[1]}
                      </span>
                      <span className="text-sm font-normal text-metalGray">
                        {item?.description?.split(" ")?.[0]}{" "}
                        {item?.description?.split(" ")?.[1]}{" "}
                        {item?.description?.split(" ")?.[2]}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex  justify-end">
                        <i
                          className="fa fa-usd text-metalBlack mt-1.5"
                          style={{ fontSize: "14px" }}
                        ></i>
                        <span className="ml-1 text-xl font-semibold text-metalBlack">
                          {item.price}
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <Link to={`/productDetails/${item?.id}`}>
                          <i
                            className="fa fa-eye text-metalBlack mr-2"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </Link>
                        <Link to={`/productDetails/${item?.id}`}>
                          <div className="px-4 bg-primary rounded-lg font-semibold text-metalwhite cursor-pointer">
                            Buy
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
