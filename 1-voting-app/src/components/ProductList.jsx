import React from 'react'
import Product from './Product'
import 'semantic-ui-css/semantic.min.css'
import { products } from '../seeds'
import { useState } from "react";
import Button from 'react-bootstrap/Button';

function ProductList() {

    const [prods, setProds] = useState(products) //initialState
    const [order, setOrder] = useState(false);

    const handleProductVote = (id, vote) => {

        const updatedProducts = prods.map(p => {
            if (p.id === id) {
                return { ...p, votes: p.votes + vote }
            } else {
                return p;
            }
        })
        setProds(updatedProducts);
    }

    const changeSort = () => {
        setOrder(!order)
    }

    const sortedProducts = prods.sort((a, b) => (order ? (a.votes - b.votes) : (b.votes - a.votes)));

    const productComponents = sortedProducts.map(product => (
        <Product
            {...product}
            key={'prod-' + product.id}
            changeVote={handleProductVote}
        ></Product>
    ));


    return (
        <section className="ui unstackable items">
            <button onClick={changeSort}>up / down</button>
            {productComponents}
        </section>)
        ;
}
export default ProductList;