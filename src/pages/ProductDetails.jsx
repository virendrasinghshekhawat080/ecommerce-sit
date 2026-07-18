import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function ProductDetails() {


    const { id } = useParams();

    const [product, setProduct] = useState(null);


    const { addToCart } = useContext(CartContext);



    useEffect(() => {


        fetch(`https://fakestoreapi.com/products/${id}`)

            .then(res => res.json())

            .then(data => setProduct(data));


    }, [id]);




    if (!product) {

        return <h2>Loading Product...</h2>;

    }




    return (


        <div style={{
            padding: "30px"
        }}>



            <div style={{

                display: "flex",

                gap: "40px",

                alignItems: "center"

            }}>




                {/* Image */}

                <img

                    src={product.image}

                    alt={product.title}

                    width="300"

                    height="300"

                />





                {/* Details */}


                <div>


                    <h1>

                        {product.title}

                    </h1>



                    <h2>

                        ₹{product.price}

                    </h2>



                    <p>

                        {product.description}

                    </p>



                    <p>

                        Category: {product.category}

                    </p>




                    <button

                        onClick={() => addToCart(product)}

                        style={{
                            padding: "12px 25px",
                            cursor: "pointer"
                        }}

                    >

                        Add To Cart 🛒


                    </button>



                </div>



            </div>



        </div>


    );

}



export default ProductDetails;