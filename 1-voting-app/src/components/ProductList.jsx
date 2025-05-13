import React from 'react'
import Product from './Product'
import 'semantic-ui-css/semantic.min.css'
import { products } from '../seeds'

function ProductList() {

    const product = products[1];

    return (
        <section className='ui unstackable items'>
            <Product
                {...product}
                // id={product.id}
                // title={product.title}
                // description={product.description}
                // url={product.url}
                // votes={product.votes}
                // productImageURL={product.productImageUrl}
                // submitterAvatarURL={product.submitterAvatarUrl}
            ></Product>
        </section>
    );
}
export default ProductList;