import React from "react";
import { useState, useEffect } from 'react';
import { getProductsByID } from "../../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailConteiner = () => {
    const [product, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className="ItemDetailConteiner">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailConteiner;