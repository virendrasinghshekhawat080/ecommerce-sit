
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./../styles/checkout.css";


function Checkout() {


    const { cart, clearCart } = useContext(CartContext);


    const navigate = useNavigate();



    const [payment, setPayment] = useState("");





    const subtotal = cart.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0

    );



    const delivery = subtotal > 0 ? 50 : 0;


    const total = subtotal + delivery;







    const placeOrder = () => {



        if (payment === "") {


            alert("Please select payment method");


            return;


        }





        const order = {


            orderId: Date.now(),


            products: cart,


            amount: total,


            paymentMethod: payment,


            date: new Date().toLocaleDateString()


        };






        localStorage.setItem(

            "order",

            JSON.stringify(order)

        );






        // Empty Cart

        clearCart();





        // Go Success Page

        navigate("/order-success");



    };









    return (


        <div className="checkout-container">



            <h1>
                Checkout 🛒
            </h1>





            <div className="checkout-grid">





                {/* Delivery Address */}


                <div className="checkout-card">


                    <h2>
                        Delivery Address 📍
                    </h2>



                    <input
                        placeholder="Full Name"
                    />



                    <input
                        placeholder="Mobile Number"
                    />



                    <textarea

                        placeholder="Full Address"

                    />



                    <input
                        placeholder="City"
                    />



                    <input
                        placeholder="State"
                    />



                    <input
                        placeholder="Pincode"
                    />



                </div>









                {/* Payment */}


                <div className="checkout-card">


                    <h2>
                        Payment Method 💳
                    </h2>




                    <label>

                        <input

                            type="radio"

                            name="payment"

                            onChange={() =>
                                setPayment("UPI")
                            }

                        />

                        UPI

                    </label>



                    <br />




                    <label>

                        <input

                            type="radio"

                            name="payment"

                            onChange={() =>
                                setPayment("Card")
                            }

                        />

                        Debit / Credit Card

                    </label>




                    <br />





                    <label>

                        <input

                            type="radio"

                            name="payment"

                            onChange={() =>
                                setPayment("COD")
                            }

                        />

                        Cash On Delivery

                    </label>



                </div>









                {/* Order Summary */}



                <div className="checkout-card">


                    <h2>
                        Order Summary 📦
                    </h2>





                    {
                        cart.map(item => (


                            <p key={item.id}>


                                {item.title.slice(0, 30)}

                                <br />

                                ₹{item.price} × {item.quantity}


                            </p>


                        ))

                    }





                    <hr />





                    <p>

                        Subtotal: ₹{subtotal.toFixed(2)}

                    </p>





                    <p>

                        Delivery: ₹{delivery}

                    </p>






                    <h2>

                        Total: ₹{total.toFixed(2)}

                    </h2>







                    <button

                        onClick={placeOrder}

                    >

                        Place Order ✅

                    </button>





                </div>





            </div>





        </div>


    );


}


export default Checkout;