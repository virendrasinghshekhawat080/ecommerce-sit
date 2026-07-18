import "./../styles/myOrders.css";


function MyOrders() {


    const order = JSON.parse(
        localStorage.getItem("order")
    );



    return (


        <div className="orders-container">



            <h1>
                My Orders 📦
            </h1>





            {

                !order ?


                    <h2>
                        No Orders Found
                    </h2>


                    :



                    <div className="order-card">



                        <h2>
                            Order ID: #{order.orderId}
                        </h2>




                        <p>

                            Date:

                            <b>
                                {order.date}
                            </b>

                        </p>





                        <p>

                            Payment:

                            <b>
                                {order.paymentMethod}
                            </b>

                        </p>






                        <p>

                            Total Amount:

                            <b>
                                ₹{order.amount.toFixed(2)}
                            </b>

                        </p>





                        <h3>
                            Products:
                        </h3>




                        {

                            order.products.map(item => (


                                <div
                                    className="order-product"
                                    key={item.id}
                                >


                                    <img

                                        src={item.image}

                                        width="70"

                                        height="70"

                                    />



                                    <div>

                                        <p>
                                            {item.title}
                                        </p>


                                        <p>

                                            ₹{item.price}

                                            ×

                                            {item.quantity}

                                        </p>


                                    </div>


                                </div>


                            ))

                        }






                        <h3 className="status">

                            Status:
                            Order Confirmed ✅

                        </h3>





                    </div>



            }




        </div>


    );

}


export default MyOrders;