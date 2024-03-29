import React, { useState, useEffect } from "react";
import AdminManue from "../../components/layout/AdminManue.js";
import Layout from "../../components/layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
const Product = () => {
  const [products, setProducts] = useState([]);

  // get all products

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://g-mart.onrender.com/api/v1/products/get-products"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something wend wrong");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminManue />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/deshboard/admin/products/${p.slug}`}
                className="product-link"
              >
                <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={p._id}
                >
                  <img
                    src={`https://g-mart.onrender.com/api/v1/products/products-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
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
    </Layout>
  );
};

export default Product;
