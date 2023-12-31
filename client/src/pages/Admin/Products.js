// import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AdminMenu from "../../components/Layout/AdminMenu";
import {Link} from "react-router-dom"
import Layout from "../../components/Layout/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);

  // get all product
  const getAllProduct = async (req, res) => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting product");
    }
  };

  // LIFE CYCLE METHOD
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Product List</h1>
          <div className="d-flex overflow-auto p-3 bg-light">
            {products?.map((p) => (
              <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className="product-link">
              <div className="card m-2" style={{ width: "18rem" }}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Products;
