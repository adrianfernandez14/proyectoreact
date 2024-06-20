import React from "react";
import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemDetailConteiner = () => {
    const [product, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data }
            setProducts(productAdapted)    
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
        
    }, [itemId])

    return(
        <div className="ItemDetailConteiner">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailConteiner;