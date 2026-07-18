// src/utils/discount.js

export const categoryDiscount = {
    "electronics": 20,
    "jewelery": 10,
    "men's clothing": 30,
    "women's clothing": 25
};

export const getDiscountedPrice = (price, category) => {
    const discount = categoryDiscount[category] || 0;

    const finalPrice = price - (price * discount / 100);

    return {
        finalPrice: finalPrice.toFixed(2),
        discount
    };
};