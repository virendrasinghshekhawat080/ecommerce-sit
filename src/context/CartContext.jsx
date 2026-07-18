
import { createContext, useState } from "react";


export const CartContext = createContext();



function CartProvider({ children }) {


    const [cart, setCart] = useState([]);




    // Add To Cart

    const addToCart = (product) => {


        const discountPercent = product.discount || 0;


        const finalPrice =

            product.finalPrice

                ?

                product.finalPrice

                :

                product.price -
                (product.price * discountPercent / 100);





        const cartProduct = {

            ...product,

            originalPrice: product.price,

            price: Number(finalPrice.toFixed(2)),

            discount: discountPercent

        };






        const existingProduct = cart.find(

            item => item.id === product.id

        );






        if (existingProduct) {


            setCart(


                cart.map(item =>


                    item.id === product.id


                        ?

                        {

                            ...item,

                            quantity:
                                item.quantity + 1

                        }


                        :


                        item


                )


            );


        }

        else {


            setCart([

                ...cart,

                {

                    ...cartProduct,

                    quantity: 1

                }

            ]);


        }


    };









    // Remove Product

    const removeFromCart = (id) => {


        setCart(

            cart.filter(

                item => item.id !== id

            )

        );


    };









    // Increase Quantity

    const increase = (id) => {


        setCart(

            cart.map(item =>


                item.id === id


                    ?

                    {

                        ...item,

                        quantity:
                            item.quantity + 1

                    }


                    :


                    item


            )

        );


    };









    // Decrease Quantity

    const decrease = (id) => {


        setCart(

            cart.map(item =>


                item.id === id && item.quantity > 1


                    ?

                    {

                        ...item,

                        quantity:
                            item.quantity - 1

                    }


                    :


                    item


            )

        );


    };









    // Clear Cart After Order

    const clearCart = () => {


        setCart([]);


    };









    // Total Items

    const cartCount = cart.reduce(

        (total, item) =>

            total + item.quantity,

        0

    );









    return (


        <CartContext.Provider


            value={{


                cart,

                addToCart,

                removeFromCart,

                increase,

                decrease,

                cartCount,

                clearCart


            }}


        >


            {children}


        </CartContext.Provider>


    );


}



export default CartProvider;