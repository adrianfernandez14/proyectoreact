import React from 'react';
import { useState, useEffect} from 'react';
import { getProducts } from '../../asynMock';
import { useParams } from 'react-router-dom';
import { getProductsByID } from '../../../asynMock';


const ItemListContainer = ({ mensajeBienvenida }) => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])
    
    
    return (
        <div>
            <h1>{mensajeBienvenida}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;
