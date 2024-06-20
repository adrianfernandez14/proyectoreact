import React from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const ItemListContainer = ({ mensajeBienvenida }) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.doc.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
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