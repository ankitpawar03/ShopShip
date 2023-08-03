import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import "../styles/ProductDetailsStyles.css"

const ProductDetails = () => {
  const params = useParams();
  const [cart, setCart] = useCart()
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([])

  // initial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  // getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id)
    } catch (error) {
      console.log(error);
    }
  };

//   get similar product
const getSimilarProduct = async (pid, cid) => {
    try {
        const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
        setRelatedProducts(data?.products)
    } catch (error) {
        console.log(error) 
    }
}

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            // height={100}
            // width={100}
            style={{height:"70%", width:"70%", marginLeft:"15%", marginTop: "10%"}}
          />
        </div>
        <div className="col-md-6 product-details-info">
            <h1 className="text-center">Product Details</h1>
            <hr />
            <h6>Name: {product.name}</h6>
            <h6>Description: {product.description}</h6>
            <h6>Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}</h6>
            <h6>Category: {product.category?.name}</h6>
            <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr/>
      <div className="row container similar-products">
        <h6>Similar Product ➡️</h6>
        {relatedProducts.length < 1 && <p className="text-center">No Similar Product Found</p>}
        <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                  </div>
                  <p className="card-text">
                    {p.description.substring(0, 60)}...
                  </p>
                  <p className="card-text">₹{p.price}</p>
                  <button class="btn btn-primary ms-3" 
                  onClick={()=>{
                    setCart([...cart,p]);
                    localStorage.setItem("cart", JSON.stringify([...cart, p]))
                    toast.success('Item Added To Cart')
                  }}>Add to Cart</button>
                  </div>
                
              </div>
            ))}
          </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
