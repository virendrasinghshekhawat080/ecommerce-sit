
import React from "react";
import "../styles/productCard.css";


function ProductCard({ item, navigate, addToCart }) {


    // Discount Calculate

    const discount = item.discount || 0;


    const finalPrice =

        Number(item.price) -

        (Number(item.price) * discount) / 100;





    return (

        <div className="product-card">


            <img

                src={item.image}

                alt={item.title}

            />




            <h3>

                {item.title.slice(0, 40)}...

            </h3>





            <p className="category">

                {item.category}

            </p>






            {/* Price Section */}


            {

                discount > 0

                    ?

                    <>


                        <p className="old-price">

                            ₹ {item.price}

                        </p>




                        <p className="price">

                            ₹ {finalPrice.toFixed(0)}

                        </p>




                        <p className="discount">

                            {discount}% OFF

                        </p>



                    </>


                    :


                    <p className="price">

                        ₹ {item.price}

                    </p>


            }







            <p className="rating">

                ⭐ {((item.id % 5) + 1)} Rating

            </p>







            <div className="card-buttons">



                <button

                    onClick={() =>
                        navigate(`/product/${item.id}`)
                    }

                >

                    View Details

                </button>







                <button


                    onClick={() =>


                        addToCart({


                            ...item,


                            originalPrice: item.price,


                            finalPrice: Number(
                                finalPrice.toFixed(2)
                            ),


                            discount: discount


                        })


                    }


                >

                    Add To Cart


                </button>




            </div>





        </div>

    );

}



export default ProductCard;