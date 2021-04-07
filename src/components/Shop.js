import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import RecommendedShop from './RecommendedShop';
import CategoryShop from './CategoryShop';
import axios from 'axios';

function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // TODO: Ideal — do the axios call for categories
        // TODO: If not, do the axios call for products
        let products = getProducts()
        // if (products) setProducts(products)
    }, [])

    useEffect(() => {
        let reducedCategories = products.reduce((categories, product) => {
            if(!categories.includes(product.category)) {
                categories.push(product.category)
            }
            return categories
        }, [])

        setCategories(reducedCategories)
    }, [products])

    const getProducts = async (category) => {
        let queryString = `?category=${category}`
        let products; 
        try {
            let response = await axios.get(`/api/products${queryString}`);
            products = response.data;
        } catch (err) {
            console.log(err)
        }
        
        return products;
    }

    const links = categories.map(category => <Link to={`/shop/${category}`}>{category}</Link>)

    return (
        <div>
            I'm the shop!
            {links}
            <Route exact path="/shop" component={RecommendedShop}/>
            <Route path="/shop/:category" render={ props => {
                return <CategoryShop {...props} getProducts={getProducts}/>
            }} />
        </div>
    )
}

export default Shop