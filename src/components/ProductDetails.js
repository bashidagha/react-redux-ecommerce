import React, { useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../App.scss';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";

const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
            console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    return (
        <div>
            {Object.keys(product).length === 0 ?
              <div className="row"><div class="spinner-border text-danger mx-auto mt-5"> </div> </div>
              :
               (
                <div className="row product_detail">
                  <img src={product.image} alt={product.title} className="col-md-4"/>
                  <div className="col-md-8">
                    <h1>{product.title}</h1>
                    <h3>{product.price} $</h3>
                    <p className="text-muted">{product.description}</p>
                    <button className="btn btn-danger">Add to Cart</button>
                  </div>

                </div>

            )}
        </div>
    );
}

export default ProductDetails
