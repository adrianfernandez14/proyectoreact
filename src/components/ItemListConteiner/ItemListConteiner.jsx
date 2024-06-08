import React from 'react';
import { useState, useEffect} from 'react'
import { getProducts } from '../../asynMock'


const ItemListContainer = ({ mensajeBienvenida }) => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])
    
    
    return (
        <div>
            <h1>{mensajeBienvenida}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;
