import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedProducts, selectedProducts, wishSelectedProducts } from "../redux/actions/productActions";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

function ProductDetails() {
  const { productId } = useParams();
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProducts(response?.data));
  };
  console.log(products);
  function addToCart(){
    dispatch(wishSelectedProducts(products));

  }
  React.useEffect(() => {
    if (productId && productId !== "") fetchData();
    return() =>{
      dispatch(removeSelectedProducts());
      
    };
  }, [productId]);

  return (
    <div className="flex flex-col px-8">
      <Header />
      <div className="">
        <div className="display-block m-auto rounded-lg ">
          <div className="p-6 rounded-lg bg-lightGray drop-shadow-lg">
            <div className="flex justify-center">
              <div className="p-10 border border-2 rounded-lg border-metalGray mr-2 w-1/3 bg-metalwhite">
                <div className="flex justify-center mb-4">
                  <img
                    src={products?.image}
                    alt={"product"}
                    className="self-center w-40 h-40 object-cover"
                  />
                </div>

                <div className="flex justify-center">
                  <div onClick={()=>addToCart()} className="transition duration-150 ease-out in-expo px-4 py-2 bg-metalYellow cursor-pointer rounded-lg flex mr-2 text-metalwhite hover:bg-metalBlack text-metalYellow">
                    <i
                      className="fa fa-cart-plus mr-1 self-center text-metalwhite"
                      style={{ fontSize: "16px" }}
                    ></i>
                    <div className="rounded-lg font-semibold text-metalwhite hover:text-metalYellow ">
                      ADD TO CART
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-primary rounded-lg flex">
                    <i
                      className="fa fa-clock-o text-metalwhite mr-1 self-center"
                      style={{ fontSize: "16px" }}
                    ></i>
                    <span className=" bg-primary rounded-lg font-semibold text-metalwhite cursor-pointer">
                      BUY NOW
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 w-2/3">
                <div className="flex flex-col">
                  <div className="flex justify-end">
                    <div className="p-4 rounded-lg flex mr-2">
                      <i
                        className="fa fa-share-alt text-metalBlack mr-1 self-center"
                        style={{ fontSize: "19px" }}
                      ></i>
                      <span className="text-lg font-semibold text-metalBlue cursor-pointer">
                        Share
                      </span>
                    </div>
                  </div>
                  <div className="font-semibold text-2xl text-metalBlack">
                    {products?.title}
                  </div>
                  <div className="flex mb-4">
                    <div className="px-1 bg-metalGreen rounded-lg mr-2">
                      {products?.rating?.rate}
                      <i
                        className="fa fa-star text-metalBlack ml-1 self-center"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </div>
                    <div className="text-md font-normal self-center">
                      {products?.rating?.count} Reviews
                    </div>{" "}
                  </div>
                  <div className="flex mb-2">
                    <i
                      className="fa fa-usd text-metalBlack mt-2"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span className="ml-1 text-xl font-semibold text-metalBlack self-center">
                      {products?.price}
                    </span>
                    <span className="ml-2 text-g font-semibold text-metalOrange self-center animate-bounce">
                      Offer Price!!!
                    </span>
                  </div>
                  <div className="flex-col flex">
                    <div className="flex">
                      <span className="text-lg font-semibold text-metalGray mr-1">
                        Product Description
                      </span>
                      <i
                        className="fa Example of info-circle fa-info-circle text-metalGray self-center "
                        style={{ fontSize: "14px" }}
                      ></i>
                    </div>
                    <span className="ml-1 text-md font-normal text-metalBlack">
                      {products?.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
