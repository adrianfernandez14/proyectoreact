import React from "react";
import { useState, useEffect } from 'react';

const ItemDetailConteiner = () => {
    const [product, setProducts] = useState(null)

    useEffect(() => {
        getProductsById('1')
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className="ItemDetailConteiner">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailConteiner;