import { useNavigate } from "react-router-dom";
import "./../styles/orderSuccess.css";


function OrderSuccess() {


    const navigate = useNavigate();


    const orderId = Math.floor(
        Math.random() * 1000000
    );



    return (

        <div className="success-container">


            <div className="success-card">


                <h1>
                    🎉 Order Placed Successfully!
                </h1>


                <p>
                    Thank you for shopping with MyStore 🛍️
                </p>



                <h2>
                    Order ID: #{orderId}
                </h2>



                <p>
                    Your order has been confirmed.
                </p>



                <button

                    onClick={() => navigate("/")}

                >

                    Continue Shopping 🛒

                </button>



            </div>


        </div>

    );

}


export default OrderSuccess;