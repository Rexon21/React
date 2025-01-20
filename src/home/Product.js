import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../service/ApiProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    const { apiRequest } = useAppContext();
    const [products, setProducts] = useState([]);
    const [hovered, setHovered] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiRequest({
                    method: "GET",
                    url: "/products",
                });

                if (response.status === 200) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [apiRequest]);

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Products</h3>

            {/* Search Bar */}
            <div className="mb-4 d-flex align-items-center">
                <i className="bi bi-search " style={{padding:"7px 13px ",backgroundColor:"rgb(51, 8, 82)",color:"white",borderRadius:"4px"}}></i>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by product name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {filteredProducts.length > 0 ? (
                <div className="row">
                    {filteredProducts.map((product) => (
                        <div
                            className="col-md-4 mb-4"
                            key={product.id}
                            onMouseEnter={() => setHovered(product.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{ cursor: "pointer" }}
                        >
                            <div
                                className="card h-100"
                                style={{
                                    borderColor: hovered === product.id ? "blue" : "lightgray",
                                    boxShadow: hovered === product.id
                                        ? "0 4px 8px rgba(0,0,0,0.2)"
                                        : "none",
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="card-img-top center"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">Product Loading....</p>
            )}
        </div>
    );
};

export default Product;
