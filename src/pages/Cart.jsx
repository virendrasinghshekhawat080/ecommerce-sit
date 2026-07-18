
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function Cart() {


    const navigate = useNavigate();



    const {
        cart,
        removeFromCart,
        increase,
        decrease
    } = useContext(CartContext);




    const subtotal = cart.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0

    );



    const deliveryCharge = subtotal > 0 ? 50 : 0;


    const totalAmount = subtotal + deliveryCharge;





    return (

        <div style={{ padding: "30px" }}>


            <h1>
                My Cart 🛒
            </h1>




            {

                cart.length === 0

                    ?

                    <h2>
                        Cart is Empty
                    </h2>


                    :


                    <>


                        {

                            cart.map(item => (


                                <div

                                    key={item.id}

                                    style={{

                                        display: "flex",

                                        alignItems: "center",

                                        gap: "20px",

                                        border: "1px solid #ddd",

                                        padding: "15px",

                                        marginBottom: "15px"

                                    }}

                                >



                                    <img

                                        src={item.image}

                                        alt={item.title}

                                        width="100"

                                        height="100"

                                    />



                                    <div>


                                        <h3>
                                            {item.title}
                                        </h3>



                                        <p>
                                            Price: ₹{item.price}
                                        </p>


                                        <p>
                                            Quantity: {item.quantity}
                                        </p>



                                        <button

                                            onClick={() => decrease(item.id)}

                                        >

                                            -

                                        </button>




                                        <span style={{ margin: "0 15px" }}>

                                            {item.quantity}

                                        </span>




                                        <button

                                            onClick={() => increase(item.id)}

                                        >

                                            +

                                        </button>





                                        <button

                                            onClick={() => removeFromCart(item.id)}

                                            style={{

                                                marginLeft: "20px"

                                            }}

                                        >

                                            Remove ❌

                                        </button>



                                    </div>



                                </div>


                            ))

                        }





                        <div

                            style={{

                                border: "1px solid #ccc",

                                padding: "20px",

                                marginTop: "20px"

                            }}

                        >



                            <h2>
                                Order Summary
                            </h2>




                            <p>
                                Subtotal: ₹{subtotal.toFixed(2)}
                            </p>




                            <p>
                                Delivery Charge: ₹{deliveryCharge}
                            </p>




                            <hr />




                            <h2>

                                Total Amount: ₹{totalAmount.toFixed(2)}

                            </h2>





                            <button

                                onClick={() => navigate("/checkout")}

                            >

                                Proceed To Checkout 🚀

                            </button>




                        </div>



                    </>


            }



        </div>

    );

}


export default Cart;