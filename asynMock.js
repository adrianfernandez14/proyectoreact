import React from "react";
const products = [
    { id: 1, name: 'Queso', price: 479, category: 'fiambres', img: , stock: 45, description: 'Descripcion del queso' },

    { id: 2, name: 'Jamon', price: 500, category: 'fiambres', img: },

    { id: 3, name: 'Salame', price: 650, category: 'fiambres', img: }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },500)
    })
};

export const getProductsByID = (productId) => { 
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};