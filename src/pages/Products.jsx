
import {
    useEffect,
    useState,
    useContext,
    useMemo
} from "react";

import {
    useLocation,
    useNavigate
} from "react-router-dom";

import { CartContext } from "../context/CartContext";

import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

import "../styles/products.css";


function Products() {


    const [products, setProducts] = useState([]);

    const [sort, setSort] = useState("");

    const [priceRange, setPriceRange] = useState([0, 1000]);

    const [rating, setRating] = useState(0);



    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);



    const location = useLocation();

    const query = new URLSearchParams(location.search);

    const category = query.get("category") || "";





    // Fetch Products

    useEffect(() => {


        fetch("https://fakestoreapi.com/products")

            .then(res => res.json())

            .then(data => {

                setProducts(data);

            })

            .catch(error => {

                console.log(error);

            });


    }, []);







    // Add Discount + Duplicate Products

    const allProducts = useMemo(() => {


        if (products.length === 0) {

            return [];

        }



        const duplicateProducts = [

            ...products,
            ...products,
            ...products,
            ...products,
            ...products

        ];



        return duplicateProducts.map((product, index) => {


            const discount = ((index % 5) + 1) * 5;


            const finalPrice =

                product.price -
                (product.price * discount) / 100;



            return {


                ...product,


                discount: discount,


                finalPrice: finalPrice


            };


        });



    }, [products]);









    // Rating

    const getRating = (id) => {

        return (id % 5) + 1;

    };










    // Filter + Sort

    const filteredProducts = useMemo(() => {


        let result = allProducts.filter(product => {



            const categoryMatch = category

                ? product.category === category

                : true;




            const priceMatch =

                product.finalPrice >= Number(priceRange[0])

                &&

                product.finalPrice <= Number(priceRange[1]);





            const ratingMatch =

                getRating(product.id) >= rating;






            return (

                categoryMatch &&

                priceMatch &&

                ratingMatch

            );


        });







        if (sort === "low") {


            result.sort(

                (a, b) =>

                    a.finalPrice - b.finalPrice

            );


        }





        if (sort === "high") {


            result.sort(

                (a, b) =>

                    b.finalPrice - a.finalPrice

            );


        }





        return result;



    }, [

        allProducts,

        category,

        priceRange,

        rating,

        sort

    ]);









    return (


        <div className="products-page">





            {/* Sidebar */}

            <div className="sidebar-wrapper">


                <Sidebar

                    setSort={setSort}

                    setPriceRange={setPriceRange}

                    setRating={setRating}

                />


            </div>







            {/* Products Area */}

            <div className="products-content">





                <div className="products-title">


                    <h2>


                        {

                            category

                                ?

                                category.toUpperCase()

                                :

                                "ALL PRODUCTS"

                        }


                    </h2>


                </div>







                <div className="grid">



                    {


                        filteredProducts.length === 0


                            ?


                            (

                                <h2>

                                    Product Not Found

                                </h2>

                            )


                            :


                            filteredProducts.map(

                                (item, index) => (


                                    <ProductCard


                                        key={index}


                                        item={item}


                                        navigate={navigate}


                                        addToCart={addToCart}


                                    />


                                )


                            )


                    }



                </div>




            </div>





        </div>


    );


}


export default Products;